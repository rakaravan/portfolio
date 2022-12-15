import { AiFillHome } from 'react-icons/ai';
import { GiHistogram } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { AiFillContacts } from 'react-icons/ai';

const data = [
    {
        id: 1,
        icon: <AiFillHome />,
        link: '#',
        title: 'HOME'
    },
    {
        id: 2,
        icon: <GiHistogram />,
        link: '#about',
        title: 'ABOUT'
    },
    {
        id: 3,
        icon: <AiOutlineFundProjectionScreen />,
        link: '#portfolio',
        title: 'PORTFOLIO'
    },
    {
        id: 4,
        icon: <AiFillContacts />,
        link: '#contact',
        title: 'CONTACT'
    }
];

export default data;