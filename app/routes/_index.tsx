import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  InlineStack,
  Button,
  Banner,
} from "@shopify/polaris";
import { AppProvider } from "@shopify/polaris";

export const loader = async () => {
  return json({
    appName: "Shopify Remix Admin",
    message: "Welcome to your Shopify Admin App!",
  });
};

export default function Index() {
  const { appName, message } = useLoaderData<typeof loader>();

  return (
    <AppProvider i18n={{}}>
      <Page
        title="Welcome"
        primaryAction={{
          content: "Get Started",
          onAction: () => console.log("Getting started!"),
        }}
      >
        <Layout>
          <Layout.Section>
            <Banner
              title={message}
              tone="success"
              onDismiss={() => {}}
            >
              <p>
                This is a Remix application built for Shopify Admin with Polaris
                components.
              </p>
            </Banner>
          </Layout.Section>

          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  {appName}
                </Text>
                <Text as="p" variant="bodyMd">
                  This application demonstrates the integration of:
                </Text>
                <BlockStack gap="200">
                  <Text as="p" variant="bodyMd">
                    ✓ Remix framework for server-side rendering
                  </Text>
                  <Text as="p" variant="bodyMd">
                    ✓ Shopify Polaris components for beautiful UI
                  </Text>
                  <Text as="p" variant="bodyMd">
                    ✓ TypeScript for type safety
                  </Text>
                </BlockStack>
              </BlockStack>
            </Card>
          </Layout.Section>

          <Layout.Section>
            <Card>
              <BlockStack gap="400">
                <Text as="h2" variant="headingMd">
                  Next Steps
                </Text>
                <Text as="p" variant="bodyMd">
                  Start building your Shopify Admin experience with these
                  resources:
                </Text>
                <InlineStack gap="300">
                  <Button
                    url="https://remix.run/docs"
                    external
                  >
                    Remix Documentation
                  </Button>
                  <Button
                    url="https://polaris.shopify.com"
                    external
                  >
                    Polaris Components
                  </Button>
                  <Button
                    url="https://shopify.dev"
                    external
                  >
                    Shopify Dev
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </AppProvider>
  );
}
