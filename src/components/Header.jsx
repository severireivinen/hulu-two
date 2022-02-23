import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderIcon title="HOME" Icon={HomeIcon} />
        <HeaderIcon title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderIcon title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderIcon title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderIcon title="SEARCH" Icon={SearchIcon} />
        <HeaderIcon title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="/hulu-logo.svg"
        width={90}
        height={40}
      />
    </header>
  );
}

export default Header;
