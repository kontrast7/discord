import { InitialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await InitialProfile();

    const server = await db.server.findFirst({
      where: {
        members: {
          some: {
            profileId: profile.id,
          },
        },
      },
    });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <div>Initial modal</div>;
};

export default SetupPage;
