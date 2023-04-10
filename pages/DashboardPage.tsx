/** @format */

import { Box, Heading } from '@chakra-ui/react';

function DashboardPage() {
	return (
		<Box maxW='md' mx='auto' mt='8' p={6}>
			<Heading as='h1' size='lg' mb='4'>
				Dashboard
			</Heading>
			<p>
				Welcome to your dashboard! Here you can view your account details,
				manage your settings, and more.
			</p>
		</Box>
	);
}

export default DashboardPage;
