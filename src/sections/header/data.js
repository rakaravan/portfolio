import {AiOutlineInstagram} from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';

const data = [
    {
        id: 1,
        link: 'https://www.instagram.com/breathetoget/',
        icon: <AiOutlineInstagram />,
        title: 'instagram'
    },
    {
        id: 2,
        link: 'https://twitter.com',
        icon: <AiOutlineTwitter />,
        title: 'twitter'
    },
    {
        id: 3,
        link: 'https://www.facebook.com/profile.php?id=100082305068709',
        icon: <FaFacebookF />,
        title: 'facebook'
    },
    {
        id: 4,
        link: 'https://github.com/rakaravan?tab=repositories',
        icon: <AiFillGithub />,
        title: 'github'
    }
];

export default data;