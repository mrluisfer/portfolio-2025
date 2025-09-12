import '@/styles/white-pattern.scss';
import { FaCheck } from 'react-icons/fa6';
import { CONTENT_TEXT_COLOR } from '.';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar';

const GITHUB_PROFILE_IMG = 'https://avatars.githubusercontent.com/u/65029792?v=4';
const Header = () => {
  return (
    <header
      className={`white-pattern flex items-center gap-7 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[50px] pt-20`}
    >
      <div className="relative">
        <Avatar className="h-24 w-24">
          <AvatarImage src={GITHUB_PROFILE_IMG} alt="@mrluisfer" />
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
        <div className="absolute -right-1 -bottom-1 rounded-full bg-blue-400 p-2 text-white transition-all hover:shadow-md hover:shadow-blue-300">
          <FaCheck />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold dark:text-black">Luis Alvarez</h1>
        <p className={`${CONTENT_TEXT_COLOR}`}>I'm a Frontend Developer based in Mexico</p>
      </div>
    </header>
  );
};

export default Header;
