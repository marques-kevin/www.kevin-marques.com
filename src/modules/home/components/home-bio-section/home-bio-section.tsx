import { Link } from "@reach/router";
import clsx from "clsx";
import { useRef } from "react";

function AvatarContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

function Avatar({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> & {
  large?: boolean;
}) {
  return (
    <Link
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <img
        src="/images/avatar.jpg"
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
      />
    </Link>
  );
}

export function HomeBioSection() {
  let headerRef = useRef<React.ElementRef<"div">>(null);
  let avatarRef = useRef<React.ElementRef<"div">>(null);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        <>
          <div
            ref={avatarRef}
            className="order-last mt-[calc(--spacing(16)-(--spacing(3)))]"
          />
          <div
            className="top-0 order-last -mb-3 pt-3"
            style={{
              position:
                "var(--header-position)" as React.CSSProperties["position"],
            }}
          >
            <div
              className="top-(--avatar-top,--spacing(3)) w-full"
              style={{
                position:
                  "var(--header-inner-position)" as React.CSSProperties["position"],
              }}
            >
              <div className="relative">
                <AvatarContainer
                  className="absolute left-0 top-3 origin-left transition-opacity"
                  style={{
                    opacity: "var(--avatar-border-opacity, 0)",
                    transform: "var(--avatar-border-transform)",
                  }}
                />
                <Avatar
                  to="/"
                  large
                  className="block h-16 w-16 origin-left"
                  style={{ transform: "var(--avatar-image-transform)" }}
                />
              </div>
            </div>
          </div>
        </>

        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{
            position:
              "var(--header-position)" as React.CSSProperties["position"],
          }}
        >
          <div
            className="top-(--header-top,--spacing(6)) w-full"
            style={{
              position:
                "var(--header-inner-position)" as React.CSSProperties["position"],
            }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <AvatarContainer>
                  <Avatar to="/" />
                </AvatarContainer>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-8 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold">
          Software designer, founder, and amateur astronaut.
        </h1>
        <p className="mt-4 text-lg">
          I'm Spencer, a software designer and entrepreneur based in New York
          City. I'm the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="mt-6 flex space-x-4">
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-500 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            ></svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-gray-500 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            ></svg>
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="text-gray-500 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            ></svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            ></svg>
          </a>
        </div>
      </div>
    </>
  );
}
