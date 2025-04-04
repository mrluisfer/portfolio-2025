import { FaCheck } from 'react-icons/fa6';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { CONTENT_TEXT_COLOR } from '.';
import '@/styles/white-pattern.scss';

const GITHUB_PROFILE_IMG = 'https://avatars.githubusercontent.com/u/65029792?v=4';
const Header = () => {
  return (
    <header
      className={`flex items-center gap-7 white-pattern pt-20 rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[50px]`}
    >
      <div className="relative">
        <Avatar className="h-24 w-24">
          <AvatarImage src={GITHUB_PROFILE_IMG} alt="@mrluisfer" />
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
        <div className="bg-blue-400 rounded-full absolute -bottom-1 -right-1 p-2 text-white hover:shadow-blue-300 hover:shadow-md transition-all">
          <FaCheck />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Luis Alvarez</h1>
        <p className={`${CONTENT_TEXT_COLOR}`}>I'm a Frontend Developer based in Mexico</p>
      </div>
    </header>
  );
};

export default Header;
