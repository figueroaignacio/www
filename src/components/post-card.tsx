// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card/card';
import { Link } from '@/i18n/navigation';
import { Button } from './ui/button/button';

interface PostCardProps {
  title: string;
  description: string;
  slug: string;
}

export function PostCard({ description, slug, title }: PostCardProps) {
  return (
    <Card size="full" variant="default">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <Button>
          <Link href={`/post/${slug}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
