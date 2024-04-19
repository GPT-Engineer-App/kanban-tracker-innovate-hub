import { Box, Flex, Heading, Text, VStack, HStack, Grid, GridItem, Badge, Button, Icon } from "@chakra-ui/react";
import { FaTasks, FaUserCircle, FaShoppingCart, FaChartLine, FaCog, FaServer, FaBell, FaDatabase } from "react-icons/fa";

const Index = () => {
  const features = [
    {
      title: "Backend Features",
      icon: FaServer,
      items: ["User Management", "Partner and Branch Management", "Transaction Management", "Wallet Management", "Reporting and Analytics", "Configurations and Settings", "Security", "System Administration", "Notifications"],
    },
    {
      title: "Frontend Features",
      icon: FaUserCircle,
      items: ["User Interfaces for Account Management", "Partner and Branch Management Interfaces", "Transaction Interfaces", "Reporting Dashboard", "Configuration and Setting Interfaces", "System Administration Portal"],
    },
    {
      title: "Database Schema",
      icon: FaDatabase,
      items: ["Users Table", "Partner Table", "Transaction Table", "Wallet Table", "Report Table", "Configuration Table", "Notification Table"],
    },
  ];

  return (
    <Box p={5}>
      <VStack spacing={10}>
        <Heading as="h1" size="xl">
          Innovate Hub Payment Project Tracker
        </Heading>
        <Text fontSize="lg">A comprehensive Kanban tracker for managing the development of the Innovate Hub Payment Project.</Text>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {features.map((feature, index) => (
            <GridItem key={index} w="100%" bg="gray.100" p={4} borderRadius="md">
              <VStack spacing={4}>
                <HStack spacing={2}>
                  <Icon as={feature.icon} w={6} h={6} />
                  <Heading as="h3" size="md">
                    {feature.title}
                  </Heading>
                </HStack>
                <VStack align="start">
                  {feature.items.map((item, idx) => (
                    <Badge key={idx} colorScheme="blue" p={2} borderRadius="lg">
                      {item}
                    </Badge>
                  ))}
                </VStack>
              </VStack>
            </GridItem>
          ))}
        </Grid>

        <Flex width="full" justifyContent="space-between">
          <Button leftIcon={<FaTasks />} colorScheme="teal" variant="solid">
            View Tasks
          </Button>
          <Button leftIcon={<FaChartLine />} colorScheme="purple" variant="solid">
            View Reports
          </Button>
          <Button leftIcon={<FaCog />} colorScheme="orange" variant="solid">
            Settings
          </Button>
          <Button leftIcon={<FaBell />} colorScheme="red" variant="solid">
            Notifications
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
