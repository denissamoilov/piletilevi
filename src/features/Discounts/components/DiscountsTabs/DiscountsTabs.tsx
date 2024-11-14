import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/components";

export const DiscountsTabs = () => {
  return (
    <Tabs defaultValue="active">
      <TabsList>
        <TabsTrigger value="active">Currently active</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="archived">Archived</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
