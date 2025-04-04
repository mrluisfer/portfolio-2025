import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GrLinkUp } from 'react-icons/gr';
import { CONTENT_TEXT_COLOR } from '..';

const detailsKeys = {
  location: 'location',
  website: 'website',
  github: 'gitHub',
  email: 'email',
};

//      email = 'mrluisfeer@gmai.com';
// location = 'Mexico';
// github = 'mrluisfer';
// website = 'https://mrluisfer.vercel.app';

export default function Details() {
  return (
    <div className="grid gap-2 grid-cols-2 grid-rows-2">
      <DetailItem
        title={detailsKeys.location}
        description={'Mexico'}
        href="https://www.google.com/search?q=mexico"
      />
      <DetailItem
        title={detailsKeys.website}
        description={'mrluisfer.vercel.app'}
        href="https://mrluisfer.vercel.app"
      />
      <DetailItem
        title={detailsKeys.github}
        description={'mrluisfer'}
        href="https://github.com/mrluisfer"
      />
      <DetailItem
        title={detailsKeys.email}
        description={'mrluisfeer@gmail.com'}
        href="mailto:mrluisfeer@gmail.com"
      />
    </div>
  );
}

function DetailItem({
  title,
  description,
  href = '',
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <strong className="capitalize text-sm">{title}</strong>
      <a
        href={href}
        className={`border-b border-transparent hover:border-neutral-700 transition-colors flex items-center gap-1 w-fit group ${CONTENT_TEXT_COLOR}`}
      >
        {title === detailsKeys.github && '@'}
        {title === detailsKeys.location && (
          <Avatar className="h-5 w-5">
            <AvatarImage
              src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
              alt="Mexico Flag"
              className="object-cover bg-cover"
            />
            <AvatarFallback>MX</AvatarFallback>
          </Avatar>
        )}
        {description}
        <span className="ml-1 rotate-45 opacity-0 group-hover:opacity-100 transition">
          <GrLinkUp />
        </span>
      </a>
    </div>
  );
}
