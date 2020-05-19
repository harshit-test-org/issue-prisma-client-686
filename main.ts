import { PrismaClient } from "@prisma/client";

async function main() {
  const client = new PrismaClient({
    log: ["query"],
  });
  const data = await client.weekMenuTimelineItem.create({
    data: {
      date: new Date(),
      weekMenu: {
        create: {
          monday: {
            create: {
              breakfast: { create: { dishes: { create: { name: "" } } } },
              snackAfterBreakfast: {
                create: { dishes: { create: { name: "" } } },
              },
              dinner: { create: { dishes: { create: { name: "" } } } },
              snackBeforeSupper: {
                create: { dishes: { create: { name: "" } } },
              },
              supper: { create: { dishes: { create: { name: "" } } } },
            },
          },
          tuesday: {
            create: {
              breakfast: { create: { dishes: { create: { name: "" } } } },
              snackAfterBreakfast: {
                create: { dishes: { create: { name: "" } } },
              },
              dinner: { create: { dishes: { create: { name: "" } } } },
              snackBeforeSupper: {
                create: { dishes: { create: { name: "" } } },
              },
              supper: { create: { dishes: { create: { name: "" } } } },
            },
          },
          wednesday: {
            create: {
              breakfast: { create: { dishes: { create: { name: "" } } } },
              snackAfterBreakfast: {
                create: { dishes: { create: { name: "" } } },
              },
              dinner: { create: { dishes: { create: { name: "" } } } },
              snackBeforeSupper: {
                create: { dishes: { create: { name: "" } } },
              },
              supper: { create: { dishes: { create: { name: "" } } } },
            },
          },
          thursday: {
            create: {
              breakfast: { create: { dishes: { create: { name: "" } } } },
              snackAfterBreakfast: {
                create: { dishes: { create: { name: "" } } },
              },
              dinner: { create: { dishes: { create: { name: "" } } } },
              snackBeforeSupper: {
                create: { dishes: { create: { name: "" } } },
              },
              supper: { create: { dishes: { create: { name: "" } } } },
            },
          },
          friday: {
            create: {
              breakfast: { create: { dishes: { create: { name: "" } } } },
              snackAfterBreakfast: {
                create: { dishes: { create: { name: "" } } },
              },
              dinner: { create: { dishes: { create: { name: "" } } } },
              snackBeforeSupper: {
                create: { dishes: { create: { name: "" } } },
              },
              supper: { create: { dishes: { create: { name: "" } } } },
            },
          },
          saturday: {
            create: {
              breakfast: { create: { dishes: { create: { name: "" } } } },
              snackAfterBreakfast: {
                create: { dishes: { create: { name: "" } } },
              },
              dinner: { create: { dishes: { create: { name: "" } } } },
              snackBeforeSupper: {
                create: { dishes: { create: { name: "" } } },
              },
              supper: { create: { dishes: { create: { name: "" } } } },
            },
          },
          sunday: {
            create: {
              breakfast: { create: { dishes: { create: { name: "" } } } },
              snackAfterBreakfast: {
                create: { dishes: { create: { name: "" } } },
              },
              dinner: { create: { dishes: { create: { name: "" } } } },
              snackBeforeSupper: {
                create: { dishes: { create: { name: "" } } },
              },
              supper: { create: { dishes: { create: { name: "" } } } },
            },
          },
        },
      },
    },
  });

  console.log(data);
  client.disconnect();
}

main();
