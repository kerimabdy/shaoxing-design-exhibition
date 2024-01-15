import { StudentGroupPage } from "@/src/app/group";
import { groups } from "@/src/entities/groups/info";
import { Group } from "@/src/entities/groups/types";

const findGroup = (groupName: string): Group | undefined => {
  return groups.find(group => group.name === groupName);
};

export default function AppStudentGroupPage({ params }: { params: { slug: string } }) {


  const group = findGroup(params.slug);

  return (
    <main>
      {group && <StudentGroupPage group={group} ></StudentGroupPage>}
    </main>
  )
}