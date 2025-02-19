import { HStack, Text } from "@chakra-ui/react";

export default {
  title: "Pricing for every stage",
  description: null,
  plans: [
    {
      id: "free",
      title: "Free",
      description: "Basic monitoring, perfect to get started.",
      price: "Free",
      features: [
        {
          title: "Monitor up to 10 repositories",
        },
        {
          title: "Limited repository size",
        },
        {
          title: "Automated PR & commit analysis",
        },
        {
          title: "Access to Public & Private Repositories",
        },
        {
          title: "Repository Graph View",
        },
        {
          title: "Security Analysis requests of specific parts of the code",
        },
        {
          title: "Full context Analysis",
        },
        {
          title: "Use your own API keys",
        },
      ],
      action: {
        href: "https://dashboard.naxusai.com/auth/login",
      },
    },
    /*{
      id: "startup",
      title: "Startup",
      description: "Flexible monitoring license for growing teams.",
      price: "9.99€/month",
      isRecommended: true,
      features: [
        {
          title: "Automated PR & commit analysis",
        },
        {
          title: "Access to Public & Private Repos",
        },
        {
          title: "In-depth analysis with basic context",
        },
        {
          title: "Monitor up to 25 repositories",
        },
        {
          title: "15,000 lines of code monitoring per month",
        },
        {
          title: "2,500 lines of code audit per month",
        },
      ],
      action: {
        href: "https://dashboard.naxusai.com/auth/login",
      },
    },*/
    {
      id: "organization",
      title: "Organization",
      description: "Our most advanced monitoring solution.",
      isRecommended: true,
      price: (
        <HStack>
          {/* <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text> */}
          <Text>Contact Us</Text>
        </HStack>
      ),
      features: [
        {
          title: "Unlimited repositories",
        },
        {
          title: "Unlimited repository size",
        },
        {
          title: "Automated PR & commit analysis",
        },
        {
          title: "Access to Public & Private Repositories",
        },
        {
          title: "Repository Graph View",
        },
        {
          title: "Security Analysis requests of specific parts of the code",
        },
        {
          title: "Full context Analysis",
        },
        {
          title: "Let us configure the plaform and confirm all the findings",
        },
        {
          title: "Support",
        },
        null,
      ],
      action: {
        label: "Contact us",
        href: "mailto:info@naxusai.com",
      },
    },
  ],
};
