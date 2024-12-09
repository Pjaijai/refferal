import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  Clipboard,
  ClipboardCheck,
  ClipboardX,
  Clock,
  Coffee,
  Copy,
  CopyCheck,
  Dot,
  Eye,
  EyeOff,
  File,
  Github,
  Gitlab,
  History,
  Instagram,
  Laptop,
  Link,
  Linkedin,
  Loader,
  LogOut,
  LucideProps,
  Mail,
  MapPin,
  Menu,
  MessageSquareMore,
  Moon,
  MoreVertical,
  Pencil,
  PersonStanding,
  RotateCcw,
  Search,
  Send,
  SendHorizontal,
  Share2,
  SlidersHorizontal,
  SunMedium,
  Trash2,
  Twitch,
  Twitter,
  Undo2,
  User,
  Verified,
  X,
  Youtube,
  type XIcon as LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

export type Icon = typeof LucideIcon

export const Icons = {
  arrowLeft: ArrowLeft,
  briefcase: Briefcase,
  calendarDays: CalendarDays,
  copy: Copy,
  copyCheck: CopyCheck,
  cross: X,
  clipboard: Clipboard,
  file: File,
  messageSquareMore: MessageSquareMore,
  sun: SunMedium,
  share: Share2,
  moon: Moon,
  twitter: Twitter,
  user: User,
  link: Link,
  laptop: Laptop,
  logOut: LogOut,
  mail: Mail,
  pencil: Pencil,
  personStanding: PersonStanding,
  loader: Loader,
  undo: Undo2,
  moreVertical: MoreVertical,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  checkCircle: CheckCircle2,
  instagram: Instagram,
  youtube: Youtube,
  github: Github,
  twitch: Twitch,
  linkedin: Linkedin,
  rotateRight: RotateCcw,
  slidersHorizontal: SlidersHorizontal,
  history: History,
  eye: Eye,
  eyeOff: EyeOff,
  coffee: Coffee,
  search: Search,
  trashBin: Trash2,

  gitlab: Gitlab,
  linkedinFilled: ({
    width,
    height,
    className,
  }: {
    width: number
    height: number
    className?: string
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(" fill-slate-500", className)}
    >
      <path d="M18 1.32353V16.6765C18 17.0275 17.8606 17.3641 17.6123 17.6123C17.3641 17.8606 17.0275 18 16.6765 18H1.32353C0.972508 18 0.635863 17.8606 0.387653 17.6123C0.139443 17.3641 0 17.0275 0 16.6765L0 1.32353C0 0.972508 0.139443 0.635863 0.387653 0.387653C0.635863 0.139443 0.972508 0 1.32353 0L16.6765 0C17.0275 0 17.3641 0.139443 17.6123 0.387653C17.8606 0.635863 18 0.972508 18 1.32353ZM5.29412 6.88235H2.64706V15.3529H5.29412V6.88235ZM5.53235 3.97059C5.53375 3.77036 5.49569 3.57182 5.42035 3.3863C5.34502 3.20078 5.23387 3.03191 5.09328 2.88935C4.95268 2.74678 4.78537 2.6333 4.60091 2.5554C4.41646 2.47749 4.21846 2.43668 4.01824 2.43529H3.97059C3.5634 2.43529 3.17289 2.59705 2.88497 2.88497C2.59705 3.17289 2.43529 3.5634 2.43529 3.97059C2.43529 4.37777 2.59705 4.76828 2.88497 5.05621C3.17289 5.34413 3.5634 5.50588 3.97059 5.50588C4.17083 5.51081 4.37008 5.47623 4.55696 5.40413C4.74383 5.33202 4.91467 5.2238 5.0597 5.08565C5.20474 4.94749 5.32113 4.78212 5.40223 4.59897C5.48333 4.41582 5.52755 4.21848 5.53235 4.01824V3.97059ZM15.3529 10.2071C15.3529 7.66059 13.7329 6.67059 12.1235 6.67059C11.5966 6.6442 11.0719 6.75644 10.6019 6.9961C10.1318 7.23577 9.73285 7.59448 9.44471 8.03647H9.37059V6.88235H6.88235V15.3529H9.52941V10.8476C9.49115 10.3862 9.63649 9.92835 9.93388 9.57347C10.2313 9.2186 10.6567 8.9954 11.1176 8.95235H11.2182C12.06 8.95235 12.6847 9.48177 12.6847 10.8159V15.3529H15.3318L15.3529 10.2071Z" />
    </svg>
  ),
  githubFilled: ({
    width,
    height,
    className,
  }: {
    width: number
    height: number
    className?: string
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(" fill-slate-500", className)}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0083 2.16663C6.47396 2.16663 2 6.67357 2 12.2493C2 16.7062 4.86662 20.4789 8.84338 21.8142C9.34058 21.9146 9.5227 21.5973 9.5227 21.3303C9.5227 21.0966 9.50631 20.2954 9.50631 19.4606C6.72225 20.0616 6.14249 18.2587 6.14249 18.2587C5.69508 17.0901 5.03215 16.7898 5.03215 16.7898C4.12092 16.1721 5.09852 16.1721 5.09852 16.1721C6.1093 16.2389 6.63969 17.2071 6.63969 17.2071C7.53432 18.7427 8.97592 18.3088 9.55588 18.0417C9.63865 17.3907 9.90394 16.94 10.1856 16.6896C7.96514 16.4559 5.62891 15.5879 5.62891 11.715C5.62891 10.6132 6.02634 9.71186 6.65608 9.01082C6.55672 8.76048 6.20866 7.72532 6.75564 6.33985C6.75564 6.33985 7.60069 6.07271 9.5061 7.3748C10.3219 7.1541 11.1632 7.04183 12.0083 7.04088C12.8533 7.04088 13.7148 7.15786 14.5102 7.3748C16.4159 6.07271 17.2609 6.33985 17.2609 6.33985C17.8079 7.72532 17.4596 8.76048 17.3603 9.01082C18.0066 9.71186 18.3876 10.6132 18.3876 11.715C18.3876 15.5879 16.0514 16.4391 13.8143 16.6896C14.179 17.0067 14.4936 17.6076 14.4936 18.5592C14.4936 19.9113 14.4773 20.9964 14.4773 21.3301C14.4773 21.5973 14.6596 21.9146 15.1566 21.8144C19.1333 20.4787 22 16.7062 22 12.2493C22.0163 6.67357 17.526 2.16663 12.0083 2.16663Z"
      />
    </svg>
  ),

  threads: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        d="M19.25 8.50488C17.6729 2.63804 12.25 3.00452 12.25 3.00452C12.25 3.00452 4.75 2.50512 4.75 12C4.75 21.4949 12.25 20.9955 12.25 20.9955C12.25 20.9955 16.7077 21.2924 18.75 17.0782C19.4167 15.2204 19.25 11.5049 12.75 11.5049C12.75 11.5049 9.75 11.5049 9.75 14.0049C9.75 14.9812 10.75 16.0049 12.25 16.0049C13.75 16.0049 15.4212 14.9777 15.75 13.0049C16.75 7.00488 11.25 6.50488 9.75 9.00488"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  ),

  smallArrowLeft: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-arrow-left"
      {...props}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  ),
  sendHorizontal: SendHorizontal,
  send: Send,
  dot: Dot,
  bigDot: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="6"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  ),
  unseenDot: (props: LucideProps) => (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="3" cy="3" r="3" fill="#FBBF24" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  bigGitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  bigSend: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-send"
      {...props}
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  ),
  industry: Briefcase,
  location: MapPin,
  company: Building2,
  yearsOfExperience: CalendarClock,
  createdAt: Clock,
  verified: Verified,
  deactivatePost: ClipboardX,
  activatePost: ClipboardCheck,
  menu: Menu,
  people: (props: LucideProps) => (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 7C7.93437 7 9.5 5.43437 9.5 3.5C9.5 1.56562 7.93437 0 6 0C4.06563 0 2.5 1.56562 2.5 3.5C2.5 5.43437 4.06563 7 6 7ZM8.4 8H8.14062C7.49062 8.3125 6.76875 8.5 6 8.5C5.23125 8.5 4.5125 8.3125 3.85938 8H3.6C1.6125 8 0 9.6125 0 11.6V12.5C0 13.3281 0.671875 14 1.5 14H10.5C11.3281 14 12 13.3281 12 12.5V11.6C12 9.6125 10.3875 8 8.4 8ZM15 7C16.6562 7 18 5.65625 18 4C18 2.34375 16.6562 1 15 1C13.3438 1 12 2.34375 12 4C12 5.65625 13.3438 7 15 7ZM16.5 8H16.3813C15.9469 8.15 15.4875 8.25 15 8.25C14.5125 8.25 14.0531 8.15 13.6187 8H13.5C12.8625 8 12.275 8.18437 11.7594 8.48125C12.5219 9.30312 13 10.3938 13 11.6V12.8C13 12.8688 12.9844 12.9344 12.9812 13H18.5C19.3281 13 20 12.3281 20 11.5C20 9.56563 18.4344 8 16.5 8Z"
        fill="currentColor"
      />
    </svg>
  ),
  work: (props: LucideProps) => (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.0454 10.4432C11.0454 10.7257 10.8166 10.9546 10.534 10.9546H7.46584C7.18331 10.9546 6.95448 10.7257 6.95448 10.4432V8.9091H0.818115V13.5114C0.818115 14.3296 1.53402 15.0455 2.35221 15.0455H15.6477C16.4658 15.0455 17.1818 14.3296 17.1818 13.5114V8.9091H11.0454V10.4432ZM15.6477 3.79546H13.0908V2.26137C13.0908 1.44319 12.3749 0.72728 11.5568 0.72728H6.44312C5.62493 0.72728 4.90902 1.44319 4.90902 2.26137V3.79546H2.35221C1.53402 3.79546 0.818115 4.51137 0.818115 5.32955V7.88637H17.1818V5.32955C17.1818 4.51137 16.4658 3.79546 15.6477 3.79546ZM11.0454 3.79546H6.95448V2.77273H11.0454V3.79546Z"
        fill="currentColor"
      />
    </svg>
  ),
  chat: (props: LucideProps) => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5454 0.818184H2.45448C1.55448 0.818184 0.818115 1.55455 0.818115 2.45455V17.1818L4.09084 13.9091H15.5454C16.4454 13.9091 17.1818 13.1727 17.1818 12.2727V2.45455C17.1818 1.55455 16.4454 0.818184 15.5454 0.818184ZM6.54539 8.18182H4.90902V6.54546H6.54539V8.18182ZM9.81812 8.18182H8.18175V6.54546H9.81812V8.18182ZM13.0908 8.18182H11.4545V6.54546H13.0908V8.18182Z"
        fill="currentColor"
      />
    </svg>
  ),
  conversation: () => (
    <svg
      width="90"
      height="73"
      viewBox="0 0 90 73"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-gray-200 dark:fill-[#1E293B]"
    >
      <path d="M8.18182 36.5C3.68182 36.5 0 32.85 0 28.3889V8.11111C0 3.65 3.68182 0 8.18182 0H40.9091C45.4091 0 49.0909 3.65 49.0909 8.11111V28.3889C49.0909 32.85 45.4091 36.5 40.9091 36.5H32.7273V48.6667L20.4545 36.5H8.18182ZM81.8182 60.8333C86.3182 60.8333 90 57.1833 90 52.7222V32.4444C90 27.9833 86.3182 24.3333 81.8182 24.3333H57.2727V28.3889C57.2727 37.3111 49.9091 44.6111 40.9091 44.6111V52.7222C40.9091 57.1833 44.5909 60.8333 49.0909 60.8333H57.2727V73L69.5455 60.8333H81.8182Z" />
    </svg>
  ),
  whatsapp: ({
    width,
    height,
    className,
  }: {
    width: number
    height: number
    className?: string
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 50 50"
      className={cn("fill-[#25d366]", className)}
    >
      <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
    </svg>
  ),
  telegram: ({
    width,
    height,
    className,
  }: {
    width: number
    height: number
    className?: string
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 50 50"
      className={cn(" fill-slate-500", className)}
    >
      <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
    </svg>
  ),
}
