import { AppShell } from "@mantine/core";
import type { PropsWithChildren } from "react";
import { Header } from "@/misc/components/header";

export function PublicLayout({ children }: PropsWithChildren) {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
