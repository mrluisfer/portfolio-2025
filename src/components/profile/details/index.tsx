import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'motion/react';
import { GrLinkUp } from 'react-icons/gr';
import { CONTENT_TEXT_COLOR } from '..';

const detailsKeys = {
  location: 'location',
  website: 'website',
  github: 'gitHub',
  email: 'email',
};

type DetailsProps = {
  location: string;
  website: string;
  github: string;
  email: string;
};

export default function Details({ location, website, github, email }: DetailsProps) {
  return (
    <div className="grid gap-2 grid-cols-2 grid-rows-2">
      <DetailItem title={detailsKeys.location} description={location} />
      <DetailItem title={detailsKeys.website} description={website} />
      <DetailItem title={detailsKeys.github} description={github} />
      <DetailItem title={detailsKeys.email} description={email} />
    </div>
  );
}

function DetailItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <strong className="capitalize text-sm">{title}</strong>
      <div className={`${CONTENT_TEXT_COLOR}`}>
        {title === detailsKeys.location ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-5 w-5">
              <AvatarImage
                src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg"
                alt="Mexico Flag"
                className="object-cover bg-cover"
              />
              <AvatarFallback>MX</AvatarFallback>
            </Avatar>
            <span>{description}</span>
          </div>
        ) : (
          <a
            href={description}
            className="border-b border-transparent hover:border-neutral-700 transition-colors flex items-center gap-1 w-fit"
          >
            {title === detailsKeys.github && '@'}
            {description}
            <span className="ml-1 rotate-45">
              <GrLinkUp />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
