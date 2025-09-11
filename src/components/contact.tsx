// Components
import { EnvelopeOpenIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

const contacts = [
  {
    icon: LinkedInLogoIcon,
    href: 'https://www.linkedin.com/in/figueroa-ignacio',
    target: '_blank',
  },
  {
    icon: GitHubLogoIcon,
    href: 'https://github.com/figueroaignacio',
    target: '_blank',
  },
  {
    icon: EnvelopeOpenIcon,
    href: 'mailto:ignaciofigueroadev@gmail.com',
    target: '',
  },
]

export function Contact() {
  return (
    <ul className="flex gap-x-5">
      {contacts.map((item) => (
        <li key={item.href}>
          <a href={item.href} target={item.target} className="">
            <item.icon className="size-5 hover:scale-[1.07] active:scale-[.9] transition-transform duration-150 text-muted-foreground" />
          </a>
        </li>
      ))}
    </ul>
  )
}
