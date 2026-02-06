import { CommercialProjects } from './commercial-projects';
import { PersonalProjects } from './personal-projects';

export async function AllProjects() {
  return (
    <div className="space-y-24">
      <PersonalProjects />
      <CommercialProjects />
    </div>
  );
}
