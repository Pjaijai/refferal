import {
  ArrowLeft,
  Briefcase,
  Building2,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ClipboardCheck,
  ClipboardX,
  Clock,
  Dot,
  Eye,
  EyeOff,
  Github,
  Heart,
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
  Send,
  SendHorizontal,
  SlidersHorizontal,
  SunMedium,
  Twitter,
  Undo2,
  User,
  Verified,
  type XIcon as LucideIcon,
} from "lucide-react"

export type Icon = typeof LucideIcon

export const Icons = {
  arrowLeft: ArrowLeft,
  briefcase: Briefcase,
  calendarDays: CalendarDays,
  messageSquareMore: MessageSquareMore,
  sun: SunMedium,
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
  github: Github,
  linkedin: Linkedin,
  rotateRight: RotateCcw,
  slidersHorizontal: SlidersHorizontal,
  history: History,
  eye: Eye,
  eyeOff: EyeOff,
  heart: Heart,
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
}
