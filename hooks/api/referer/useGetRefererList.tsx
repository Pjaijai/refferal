import { useEffect, useState } from "react"
import { supabase } from "@/utils/services/supabase/config"

import { IRefererResponse } from "@/types/api/response/referer-list"

interface IUseGetRefererListProps {
  companyName: string
  cityUuid?: string
  provinceUuid?: string
  countryUuid?: string
  industryUuid?: string
  sorting: string
  yoeMax?: string
  yoeMin?: string
  page: number
}
const useGetRefererList = ({
  companyName,
  cityUuid,
  provinceUuid,
  countryUuid,
  industryUuid,
  sorting,
  yoeMin,
  yoeMax,
  page,
}: IUseGetRefererListProps) => {
  const ITEMS_PER_PAGE = 3
  const from = page * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE
  const [refererList, setRefererList] = useState<IRefererResponse[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const sort = sorting.split(",")
  const order = sort[1] === "dec" ? false : true
  useEffect(() => {
    setIsLoading(true)
    // Create an async function to fetch data
    async function fetchData() {
      // Fetch country data
      let query = supabase
        .from("user")
        .select(
          `
        username,
        avatar_url,
        chinese_first_name,
        chinese_last_name,
        english_first_name,
        english_last_name,
        description,
        company_name,
        job_title,
        year_of_experience,
        country_uuid,
        province_uuid,
        city_uuid,
        social_media_url,
        industry_uuid
      `
        )
        .eq("is_referer", true)
        .lte("year_of_experience", yoeMax ? parseInt(yoeMax) : 100)
        .gte("year_of_experience", yoeMin ? parseInt(yoeMin) : 0)
        .order("year_of_experience", { ascending: order })
      // .range(from, to)

      if (countryUuid !== undefined) {
        query = query.eq("country_uuid", countryUuid)
      }
      if (provinceUuid !== undefined) {
        query = query.eq("province_uuid", provinceUuid)
      }
      if (cityUuid !== undefined) {
        query = query.eq("city_uuid", cityUuid)
      }
      if (industryUuid !== undefined) {
        query = query.eq("industry_uuid", industryUuid)
      }

      const { data: refererData, error: countryError } = await query
      console.log("refererData", refererData)

      if (countryError) {
        console.error("Error fetching country data:", countryError)
      }

      if (refererData) {
        // Update the countryData state with the fetched data
        setRefererList([...refererList, ...refererData] as IRefererResponse[])
      }

      if (!refererData) {
        // Update the countryData state with the fetched data
        setHasMore(false)
      }

      setIsLoading(false)
    }
    console.log("firing")
    // Call the fetchData function
    fetchData()
  }, [
    companyName,
    cityUuid,
    provinceUuid,
    countryUuid,
    industryUuid,
    order,
    yoeMax,
    yoeMin,
  ])

  return { data: refererList, isLoading, hasMore }
}

export default useGetRefererList
