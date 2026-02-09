const ProjectIdPage = async ({
  params,
}: {
  params: Promise<{
    projectId: string;
  }>;
}) => {
  const { projectId } = await params;

  return <div>ID: {projectId}</div>;
};

export default ProjectIdPage;
