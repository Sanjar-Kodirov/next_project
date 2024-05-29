import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  // const { userId } = auth();

  const userId = "clerk123456";

  const mongoUser = await getUserById({ userId });

  // console.log("mongoUser", mongoUser);

  return (
    <div>
      <h1 className=" h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default page;
