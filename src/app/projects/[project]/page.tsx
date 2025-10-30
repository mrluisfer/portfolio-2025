export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;

  return <div>ProjectPage</div>;
}
