import image1 from "@/assets/photos/image-1.jpg";
import image2 from "@/assets/photos/image-2.jpg";
import image3 from "@/assets/photos/image-3.jpg";
import image4 from "@/assets/photos/image-4.jpg";
import image5 from "@/assets/photos/image-5.jpg";
import { MessageI18nKeys } from "@/intl";
import { Container } from "@/ui/container/container";
import { Link, RouteComponentProps } from "@reach/router";
import clsx from "clsx";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { useIntl } from "react-intl";

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-slate-400 dark:stroke-slate-500"
      />
    </svg>
  );
}

function Article({ article }: { article: Article }) {
  const intl = useIntl();

  return (
    <div className="flex gap-2 rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
      <div className="shrink-0">
        <img src={get_favicon_from_url(article.url)} className="h-4 w-4" />
      </div>
      <div>
        <div className="font-medium leading-none">
          <Link to={article.url}>
            {intl.formatMessage({ id: article.title })}
          </Link>
        </div>
        <div className="mt-1 text-sm text-slate-500">
          {intl.formatMessage({ id: article.description })}
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a className="group -m-1 p-1" target="_blank" href={props.to}>
      <Icon className="h-6 w-6" />
    </a>
  );
}

interface Role {
  company: string;
  title: string;
  logo: string;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 dark:border dark:border-slate-700/50 dark:bg-slate-800 dark:ring-0">
        <img
          src={role.logo}
          alt=""
          className="h-6 w-6 rounded-full object-cover"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-slate-900 dark:text-slate-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-slate-500 dark:text-slate-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-slate-400 dark:text-slate-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  const intl = useIntl();
  let resume: Array<Role> = [
    {
      company: intl.formatMessage({ id: "home/jobs/foudroyer/title" }),
      title: intl.formatMessage({ id: "home/jobs/foudroyer/role" }),
      logo: get_favicon_from_url("https://www.foudroyer.com"),
      start: "2021",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: intl.formatMessage({ id: "home/jobs/doctrine/title" }),
      title: intl.formatMessage({ id: "home/jobs/doctrine/role" }),
      logo: get_favicon_from_url("https://www.doctrine.fr"),
      start: "2018",
      end: "2020",
    },
    {
      company: intl.formatMessage({ id: "home/jobs/nunki/title" }),
      title: intl.formatMessage({ id: "home/jobs/nunki/role" }),
      logo: "https://cdn.theorg.com/8192cfb4-0a2c-440a-937c-36d713ae8c22_medium.jpg",
      start: "2015",
      end: "2018",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40">
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">
          {intl.formatMessage({ id: "home/resume/label" })}
        </span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  );
}

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image5, image4, image1, image2, image3].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              "aspect-10/9 relative w-56 flex-none overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

type Article = {
  title: MessageI18nKeys;
  description: MessageI18nKeys;
  url: string;
};

const articles: Article[] = [
  {
    title: "home/companies/foudroyer/title",
    description: "home/companies/foudroyer/description",
    url: "https://www.foudroyer.com?utm_source=kevin",
  },
  {
    title: "home/companies/sudoku-academy/title",
    description: "home/companies/sudoku-academy/description",
    url: "https://www.sudoku.academy?utm_source=kevin",
  },
  {
    title: "home/companies/zenless-zone-zero-music/title",
    description: "home/companies/zenless-zone-zero-music/description",
    url: "https://zenless-zone-zero-music.app?utm_source=kevin",
  },
  {
    title: "home/companies/temple-du-haiku/title",
    description: "home/companies/temple-du-haiku/description",
    url: "https://www.temple-du-haiku.fr?utm_source=kevin",
  },
];

const get_favicon_from_url = (url: string) => {
  return `https://www.google.com/s2/favicons?domain=${url}&sz=64`;
};

export const HomeRoute: React.FC<RouteComponentProps> = () => {
  const intl = useIntl();

  return (
    <>
      <div className="py-8">
        <div className="fixed inset-0 flex justify-center bg-slate-50 sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>

        <Container className="mt-6 bg-white">
          <div className="max-w-2xl">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHNChhMOKc1Uw/profile-displayphoto-shrink_800_800/B4EZcqavBUHsAg-/0/1748763341285?e=1756339200&v=beta&t=XbD2dZbZb8wSYtyMVoQuMOarPBUdfiLHHOfNN8d-DQk"
              alt="Kevin"
              className="h-12 w-12 rounded-full"
            />

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
              {intl.formatMessage({ id: "home/bio/title" })}
            </h1>
            <p className="mt-6 text-base text-slate-600 dark:text-slate-400">
              {intl.formatMessage({ id: "home/bio/description" })}
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                to="https://x.com/km_marques"
                aria-label="Follow on X"
                icon={TwitterIcon}
              />
              <SocialLink
                to="https://www.instagram.com/km_marques/"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
              />
              <SocialLink
                to="https://github.com/marques-kevin/"
                aria-label="Follow on GitHub"
                icon={GithubIcon}
              />
              <SocialLink
                to="https://www.linkedin.com/in/marques-kevin/"
                aria-label="Follow on LinkedIn"
                icon={LinkedinIcon}
              />
            </div>
          </div>
        </Container>
        <Photos />
        <Container className="mt-24 md:mt-28">
          <div className="mx-auto grid max-w-xl grid-cols-1 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              {articles.map((article) => (
                <Article key={article.url} article={article} />
              ))}
            </div>
            <div className="space-y-10 pl-8">
              <Resume />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
