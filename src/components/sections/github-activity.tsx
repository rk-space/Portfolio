import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, GitPullRequest, Star, GitFork, GitCommit, ExternalLink } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

async function getGithubActivity() {
  try {
    const res = await fetch("https://api.github.com/users/vercel/events/public", {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    if (!res.ok) {
      throw new Error("Failed to fetch GitHub activity");
    }
    const data = await res.json();
    return data.slice(0, 5); // Get latest 5 events
  } catch (error) {
    console.error(error);
    return [];
  }
}

function EventIcon({ eventType }: { eventType: string }) {
  switch (eventType) {
    case "PushEvent":
      return <GitCommit className="h-4 w-4 text-muted-foreground" />;
    case "PullRequestEvent":
      return <GitPullRequest className="h-4 w-4 text-muted-foreground" />;
    case "WatchEvent":
      return <Star className="h-4 w-4 text-muted-foreground" />;
    case "ForkEvent":
      return <GitFork className="h-4 w-4 text-muted-foreground" />;
    default:
      return <Github className="h-4 w-4 text-muted-foreground" />;
  }
}

function EventDescription({ event }: { event: any }) {
  const { type, payload, repo } = event;
  const repoName = repo.name;

  switch (type) {
    case "PushEvent":
      return (
        <span>Pushed {payload.size} commit{payload.size > 1 ? 's' : ''} to <span className="font-medium text-foreground">{repoName}</span></span>
      );
    case "PullRequestEvent":
      return (
        <span>{payload.action} a pull request in <span className="font-medium text-foreground">{repoName}</span></span>
      );
    case "WatchEvent":
      return <span>Starred <span className="font-medium text-foreground">{repoName}</span></span>;
    case "ForkEvent":
      return <span>Forked <span className="font-medium text-foreground">{repoName}</span></span>;
    case "CreateEvent":
       return <span>Created a {payload.ref_type} in <span className="font-medium text-foreground">{repoName}</span></span>;
    default:
      return <span>{type} on <span className="font-medium text-foreground">{repoName}</span></span>;
  }
}

export default async function GithubActivity() {
  const activity = await getGithubActivity();

  return (
    <section id="github-activity" className="bg-secondary">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline">Recent GitHub Activity</h2>
        <p className="text-muted-foreground">A feed of my latest contributions and activities.</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          {activity.length > 0 ? (
            <ul className="space-y-4">
              {activity.map((event: any) => (
                <li key={event.id} className="flex items-start gap-4">
                  <div className="mt-1">
                    <EventIcon eventType={event.type} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm text-muted-foreground">
                      <EventDescription event={event} />
                    </p>
                    <p className="text-xs text-muted-foreground/80">
                      {formatDistanceToNow(new Date(event.created_at), { addSuffix: true })}
                    </p>
                  </div>
                  <Link href={`https://github.com/${event.repo.name}`} target="_blank">
                    <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-muted-foreground">Could not load GitHub activity.</p>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
