import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function RoutePending() {
  return (
    <div className="route-pending-card mx-auto mt-10 max-w-md rounded-2xl border border-border bg-card/95 p-5 text-sm text-muted-foreground shadow-soft backdrop-blur">
      <div className="mb-3 h-1 overflow-hidden rounded-full bg-secondary">
        <div className="route-pending-fill h-full rounded-full bg-gradient-to-r from-primary to-accent" />
      </div>
      Loading page...
    </div>
  );
}

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPendingMs: 120,
    defaultPendingMinMs: 160,
    defaultPendingComponent: RoutePending,
  });

  return router;
};
