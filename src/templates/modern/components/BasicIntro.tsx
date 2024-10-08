import { BsGlobe } from 'react-icons/bs';
import { ProfileContact } from '../atoms/ProfileContact';
import { ProfileImage } from 'src/helpers/common/components/ProfileImage';
import { ProfileName } from '../atoms/ProfileName';
import { SectionSubtitle } from '../atoms/SectionSubtitle';

export const BasicIntro = ({
  name,
  label,
  url,
  email,
  phone,
  city,
  image,
}: {
  name: string;
  label: string;
  url: string;
  email: string;
  phone: string;
  city: string;
  image: string;
}) => {
  return (
    <div className="flex justify-center text-center items-center p-2">
      <div className='flex flex-col text-center items-center justify-center'>
        <ProfileName name={name} />
        <SectionSubtitle label={label} />
        <div className="flex gap-1 items-center text-center">
          <ProfileContact text={phone} /> 
          <span>||</span>
          <ProfileContact text={email} />
          <span>||</span>
          <ProfileContact text={city} />
          <span>||</span>
          {url && (
            <div className="flex gap-2 ml-2 items-center">
              <BsGlobe />
              <ProfileContact text={url} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
