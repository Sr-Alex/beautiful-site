import { Box } from "lucide-react";

function ProjectMiniature() {
  return (
    <li className="cursor-pointer flex flex-col items-center justify-center w-44 h-40 py-2 perspective [&>.wrapper]:hover:rotate-x-0 [&>.wrapper]:hover:mt-0 [&>.content]:hover:block">
        <Box className="w-8 h-8 stroke-proj-purple dark:stroke-proj-green" />
        <h4 className="z-10 text-center font-bold">ProjName</h4>
        <div className="content hidden mt-4">
          <h4 className="z-10 mb-2 text-center font-bold">Software Design</h4>
          <p><span className="font-bold">By:</span> UserName123</p>
        </div>
      <div className="wrapper absolute -z-10 w-full h-full mt-16 rounded-lg rotate-x-75 border-2 border-proj-gray duration-300">
      </div>
    </li>
  );
}

export default ProjectMiniature;