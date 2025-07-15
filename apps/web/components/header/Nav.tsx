import Link from 'next/link';
import { FaGithubAlt } from 'react-icons/fa';

export default function Nav() {
  return (
    <nav>
      <Link href={process.env.GITHUB_LINK || '/'} target='_blank'>
        <FaGithubAlt size={20} />
      </Link>
    </nav>
  );
}
