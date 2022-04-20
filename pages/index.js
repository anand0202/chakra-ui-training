import NextLink from "next/link";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { AspectRatio } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaGithub, FaDown } from "react-icons/fa";
import { Input } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Kbd } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  Avatar,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { VisuallyHidden, VisuallyHiddenInput } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { SkipNavLink, SkipNavContent } from "@chakra-ui/skip-nav";
import { AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/react";
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Chakra UI Tutorial</h1>
      <h2>
        Chnaged App.js; Wrapped the content of the page around ChakraProvider
      </h2>
      <h2>
        Import extendTheme function to custoize the default theme object in
        App.js
      </h2>
      <h2>Color Mode script in document.js</h2>
      <br></br>
      <br></br>
      <h1>AspectRatio</h1>
      {/* //This video will have equal sides */}
      <AspectRatio maxW="560px" ratio={1}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>
      <br></br>
      <br></br>
      <h2>
        Box is the most abstract component on top of which all other Chakra UI
        components are built. By default, it renders a div element.
      </h2>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Center is a layout component that centers its child within itself.
      </h2>
      <Center bg="Green" h="500px" w="500px" borderRadius={500} color="white">
        This is the Center
      </Center>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Containers are used to constrain a contents width to the current
        breakpoint, while keeping it fluid.
      </h2>
      <Container maxW="md" bg="blue.600" color="white" centerContent>
        md Container
      </Container>
      <Container maxW="550px" bg="purple.600" color="white">
        550px Container
      </Container>
      <Container maxW="container.md" bg="green.400" color="#262626">
        container.md Container
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Flex is Box with display: flex and comes with helpful style shorthand.
        It renders a div element.
      </h2>
      <Flex color="white">
        <Center w="100px" bg="green.500">
          Box 1
        </Center>
        <Square bg="blue.500" size="150px">
          Box 2
        </Square>
        <Box flex="1" bg="tomato">
          Box 3
        </Box>
      </Flex>
      <a href="https://chakra-ui.com/docs/components/layout/flex#flex-and-spacer-vs-grid-vs-stack">
        Check out for spacing. Click Here.
      </a>
      <br></br>
      <h2>
        Using the Spacer.A good use case for Spacer is to create a navbar with a
        signup/login button aligned to the right.
      </h2>
      <Flex bg="black" color="White" width="2xl" padding="20px">
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            Sign Up
          </Button>
          <Button colorScheme="teal">Log in</Button>
        </Box>
      </Flex>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        A primitive useful for grid layouts. Grid is Box with display: grid and
        it comes with helpful style shorthand. It renders a div element.
      </h2>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      <h2>SImple Grid</h2>
      <SimpleGrid minChildWidth="120px" spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
      </SimpleGrid>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Stack is a layout component that makes it easy to stack elements
        together and apply a space between them.
      </h2>
      <HStack spacing="24px">
        <h2>HStack</h2>
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
      <VStack spacing="24px">
        <h2>Vstack</h2>
        <Box w="40px" h="40px" bg="yellow.200">
          1
        </Box>
        <Box w="40px" h="40px" bg="tomato">
          2
        </Box>
        <Box w="40px" h="40px" bg="pink.100">
          3
        </Box>
      </VStack>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Wrap is a layout component that adds a defined space between its
        children. It wraps its children automatically if there is not enough
        space to fit any more in the same row.
      </h2>
      <Wrap spacing="30px">
        <WrapItem>
          <Center w="180px" h="80px" bg="red.200">
            Box 1
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="green.200">
            Box 2
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="tomato">
            Box 3
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blue.200">
            Box 4
          </Center>
        </WrapItem>
        <WrapItem>
          <Center w="180px" h="80px" bg="blackAlpha.500">
            Box 5
          </Center>
        </WrapItem>
      </Wrap>
      <br></br>
      <br></br>
      <br></br>
      <Button colorScheme="blue" size="lg">
        Button
      </Button>
      <Button colorScheme="teal" size="lg" variant="outline">
        Button
      </Button>
      <br></br>
      <br></br>
      <br></br>
      <h2>Button Group</h2>
      <ButtonGroup variant="outline" spacing="6">
        <Button colorScheme="blue">Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>
      <br></br>
      <br></br>
      <br></br>
      <h2>CheckBOX</h2>
      <h2>
        The Checkbox component is used in forms when a user needs to select
        multiple values from several options
      </h2>
      <Checkbox defaultChecked>Checkbox</Checkbox>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Chakra exports a CheckboxGroup component to help manage the checked
        state of its children Checkbox components and conveniently pass a few
        shared style props to each.
      </h2>
      <CheckboxGroup colorScheme="green" defaultValue={["naruto", "kakashi"]}>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          <Checkbox value="naruto">Naruto</Checkbox>
          <Checkbox value="sasuke">Sasuke</Checkbox>
          <Checkbox value="kakashi">kakashi</Checkbox>
        </Stack>
      </CheckboxGroup>
      <a href=" https://chakra-ui.com/docs/components/form/checkbox#hooks">
        Click here to Check out CheckBox Hooks UseCheckbox
      </a>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Editable Text is used for inline renaming of some text. It appears as
        normal UI text but transforms into a text input field when the user
        clicks on or focuses it.
      </h2>
      <Editable defaultValue="Take some chakra" border="2px solid red">
        <EditablePreview />
        <EditableTextarea />
      </Editable>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Form Control. Check docs for more features. FormControl provides context
        such as isInvalid, isDisabled, and isRequired to form elements.
      </h2>
      <a href="https://chakra-ui.com/docs/components/form/form-control#import">
        Click here to read more about Form control
      </a>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        IconButton composes the Button component except that it renders only an
        icon.
      </h2>
      <IconButton
        variant="outline"
        colorScheme="purple"
        aria-label="Call Sage"
        fontSize="30px"
        icon={<FaGithub />}
      />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Input component is a component that is used to get user input in a
        text field.
      </h2>
      <Input placeholder="Basic usage" />
      <h2>Check out docs for more features .</h2>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The NumberInput component is similar to the Input component, but it has
        controls for incrementing or decrementing numeric values.
      </h2>
      <NumberInput step={5} defaultValue={15} min={10} max={30}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The PinInput component is similar to the Input component, but it is
        optimized for entering sequences of digits.
      </h2>
      <HStack>
        <PinInput type="alphanumeric" mask>
          <PinInputField />
          <PinInputField />
          <PinInputField />
          <PinInputField />
        </PinInput>
      </HStack>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Radios are used when only one choice may be selected in a series of
        options.
      </h2>
      <RadioExample />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The RangeSlider is a multi thumb slider used to select a range of
        related values. A common use-case of this component is a price range
        picker that allows a user to set the minimum and maximum price.
      </h2>
      <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Select component is a component that allows users pick a value from
        predefined options. Ideally, it should be used when there are more than
        5 options, otherwise you might consider using a radio group instead.
      </h2>
      <Select placeholder="Select option" width="md">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option2">Option 4</option>
        <option value="option3">Option 5</option>
      </Select>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Slider is used to allow users to make selections from a range of
        values.
      </h2>
      <Slider aria-label="slider-ex-1" defaultValue={30}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Switch component is used as an alternative for the Checkbox
        component. You can switch between enabled or disabled states.
      </h2>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          Enable email alerts?
        </FormLabel>
        <Switch id="email-alerts" />
      </FormControl>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Textarea component allows you to easily create multi-line text
        inputs.
      </h2>
      <Textarea placeholder="Here is a sample placeholder" />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Badges are used to highlight an item's status for quick recognition.
      </h2>
      <Stack direction="row">
        <Badge>Default</Badge>
        <Badge colorScheme="green">Success</Badge>
        <Badge colorScheme="red">Removed</Badge>
        <Badge colorScheme="purple">New</Badge>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Code is a component used to display inline code. It is composed from the
        Box component with a font family of mono for displaying code.
      </h2>
      <Stack direction="row">
        <Code children="console.log(welcome)" />
        <Code colorScheme="red" children="var chakra = 'awesome!'" />
        <Code colorScheme="yellow" children="npm install chakra" />
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Dividers are used to visually separate content in a list or group. Look
        Closely!. There is a divider.
      </h2>
      <Divider />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The keyboard key component exists to show which key or combination of
        keys performs a given action.
      </h2>
      <Kbd>ctrl</Kbd> + <Kbd>v</Kbd> to paste.
      <br></br>
      <br></br>
      <br></br>
      <h2>
        List component is used to display list items. It renders a ul element by
        default.
      </h2>
      <UnorderedList>
        <ListItem>Lorem ipsum dolor sit amet</ListItem>
        <ListItem>Consectetur adipiscing elit</ListItem>
        <ListItem>Integer molestie lorem at massa</ListItem>
        <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </UnorderedList>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        As the name implies, the Stat component is used to display some
        statistics.
      </h2>
      <StatGroup>
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
        <Stat>
          <StatLabel>Received</StatLabel>
          <StatNumber>324,900</StatNumber>
          <StatHelpText>
            <StatArrow type="decrease" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Tables are used to organize and display data efficiently. It renders a
        table element by default.
      </h2>
      <TableContainer width="2xl">
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Tag component is used for items that need to be labeled, categorized, or
        organized using keywords that describe them.
      </h2>
      <Tag>Sample Tag</Tag>
      <Tag size="lg" colorScheme="red" borderRadius="full">
        <Avatar src="" size="xs" name="Anand Raj" ml={-1} mr={2} />
        <TagLabel>Name</TagLabel>
      </Tag>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </h2>
      <Stack spacing={3}>
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>

        <Alert status="success">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>

        <Alert status="warning">
          <AlertIcon />
          Seems your account is about expire, upgrade now
        </Alert>

        <Alert status="info">
          <AlertIcon />
          Chakra is going live on August 30th. Get ready!
        </Alert>
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The CircularProgress component is used to indicate the progress for
        determinate and indeterminate processes.
      </h2>
      <CircularProgress value={40} color="green.400">
        <CircularProgressLabel>40%</CircularProgressLabel>
      </CircularProgress>
      <h2>
        Setting the progress to indeterminate means you're not able to determine
        the value upfront. Pass the isIndeterminate prop to activate this state.
      </h2>
      <CircularProgress isIndeterminate color="green.300" />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Progress is used to display the progress status for a task that takes a
        long time or consists of several steps.
      </h2>
      <Progress hasStripe value={64} />
      <h2>To show an animated progress, pass the isIndeterminate prop.</h2>
      <Progress size="xs" isIndeterminate />
      <br></br>
      <br></br>
      <br></br>
      <h2>Skeleton is used to display the loading state of some components.</h2>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Spinners provide a visual cue that an action is either processing,
        awaiting a course of change or a result
      </h2>
      <Spinner
        thickness="4px"
        speed=".65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The toast is used to show alerts on top of an overlay. The toast will
        close itself when the close button is clicked, or after a timeout — the
        default is 5 seconds. The toast component is used to give feedback to
        users after an action has taken place.
      </h2>
      <ToastStatusExample />
      <br></br>
      <br></br>
      <br></br>
      <SkipNavContent />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Text component is the used to render text and paragraphs within an
        interface. It renders a p tag by default.
      </h2>
      <Text color="gray.500" isTruncated>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Headings are used for rendering headlines. Heading composes Box so you
        can use all the style props and add responsive styles as well. It
        renders an h2 tag by default.
      </h2>
      <Heading>I'm a Heading</Heading>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        AlertDialog component is used to interrupt the user with a mandatory
        confirmation or action.
      </h2>
      <AlertDialogExample />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Drawer component is a panel that slides out from the edge of the
        screen. It can be useful when you need users to complete a task or view
        some details without leaving the current page.
      </h2>
      <DrawerExample />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        An accessible dropdown menu for the common dropdown menu button design
        pattern. Menu uses roving tabIndex for focus management.
      </h2>
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        A dialog is a window overlaid on either the primary window or another
        dialog window. Content behind a modal dialog is inert, meaning that
        users cannot interact with it. Visit docs for models with different
        features.
      </h2>
      <ModalExample />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Popover is a non-modal dialog that floats around a trigger. It is used
        to display contextual information to the user, and should be paired with
        a clickable trigger element.
      </h2>
      <Popover>
        <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>ARe you sure?</PopoverBody>
        </PopoverContent>
      </Popover>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        A tooltip is a brief, informative message that appears when a user
        interacts with an element. Tooltips are usually initiated in one of two
        ways: through a mouse-hover gesture or through a keyboard-hover gesture.
      </h2>
      <Tooltip
        backgroundColor="green"
        label="Hey, I'm here!"
        aria-label="A tooltip"
      >
        Hover On top
      </Tooltip>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Accordions display a list of high-level options that can expand/collapse
        to reveal more information.
      </h2>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <br></br>
      <br></br>
      <br></br>
      <h2>An accessible tabs component that provides keyboard interactions</h2>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        VisuallyHidden is a common technique used in web accessibility to hide
        content from the visual client, but keep it readable for screen readers.
      </h2>
      <Box>
        <Heading>Title and description. Check Code to Understand.</Heading>
        <VisuallyHidden>This will be hidden</VisuallyHidden>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Breadcrumbs, or a breadcrumb navigation, can help enhance how users
        navigate to previous page levels of a website, especially if that
        website has many pages or products.
      </h2>
      <Breadcrumb backgroundColor="gray">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Links are accessible elements used primarily for navigation. This
        component is styled to resemble a hyperlink and semantically renders an
        a tag.
      </h2>
      <Link>Chakra UI</Link>
      <Link href="https://chakra-ui.com" isExternal>
        Chakra Design system <ExternalLinkIcon mx="2px" />
      </Link>
      <h2>
        To use the Link with Next.js, all you need to do is to wrap Link with
        Next.js Link component and pass the passHref prop. passHref Forces
        Next.js Link to send the href property to its child.
      </h2>
      <NextLink href="/home" passHref>
        <Link>Home</Link>
      </NextLink>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Link overlay provides a semantic way to wrap elements (cards, blog post,
        articles, etc.) in a link.
      </h2>
      <LinkBox
        background="#ddd"
        as="article"
        maxW="sm"
        p="5"
        borderWidth="1px"
        rounded="md"
      >
        <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
          13 days ago
        </Box>
        <Heading size="md" my="2">
          <LinkOverlay href="#">
            New Year, New Beginnings: Smashing Workshops & Audits
          </LinkOverlay>
        </Heading>
        <Text>
          Catch up on what’s been cookin’ at Smashing and explore some of the
          most popular community resources.
        </Text>
      </LinkBox>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Skip Navigation link and destination container for screen readers and
        keyboard users.
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.
      </h2>
      <Wrap>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
        <WrapItem>
          <Avatar
            name="Kola Tioluwani"
            src="https://bit.ly/tioluwani-kolawole"
          />
        </WrapItem>
        <WrapItem>
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        </WrapItem>
      </Wrap>
      <br></br>
      <br></br>
      <br></br>
      <h2>Chakra provides multiple ways to use icons in your project</h2>
      <PhoneIcon mr={5} />
      <AddIcon w={6} h={6} mr={5} />
      <WarningIcon w={8} h={8} mr={5} color="red.500" />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Image component is used to display images. Image composes Box so you
        can use all the style props and add responsive styles as well.
      </h2>
      <Box boxSize="sm">
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        CloseButton is essentially a button with a close icon. It is used to
        handle the close functionality in feedback and overlay components like
        Alerts, Toasts, Drawers and Modals.
      </h2>
      <CloseButton />
      <br></br>
      <br></br>
      <br></br>
      <h2>
        Portal is used to transport any component or element to the end of
        document.body and renders a React tree into it.
      </h2>
      <br></br>
      <br></br>
      <br></br>
      <h2>
        The Show and Hide components are wrappers for other elements and
        components to show or hide them based on a media query.
      </h2>
      <Show above="sm">
        <Box>This text appears at the "sm" value screen width or greater.</Box>
      </Show>
      <Hide below="md">
        <Box>This text hides at the "md" value screen width and smaller.</Box>
      </Hide>
	  <br></br>
      <br></br>
      <br></br>
	  <h2>Chakra exports four components Fade, ScaleFade, Slide, and SlideFade to provide simple transitions.</h2>
	  <ScaleFadeEx />
    </div>
  );
}

function RadioExample() {
  const [value, setValue] = useState("1");
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
}

function ToastStatusExample() {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                status: status,
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

function AlertDialogExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("right");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb="4">
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
function ModalExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1> This is a modal</h1>
            <p> lorem</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
function ScaleFadeEx() {
	const { isOpen, onToggle } = useDisclosure()
  
	return (
	  <>
		<Button onClick={onToggle}>Click Me</Button>
		<ScaleFade initialScale={0.9} in={isOpen}>
		  <Box
			p='40px'
			color='white'
			mt='4'
			bg='teal.500'
			rounded='md'
			shadow='md'
		  >
			Fade
		  </Box>
		</ScaleFade>
	  </>
	)
  }
