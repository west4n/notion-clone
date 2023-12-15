'use client'

import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useConvexAuth } from 'convex/react'
import { Spinner } from '@/components/spinner'
import Link from 'next/link'
import { SignInButton } from '@clerk/clerk-react'

export const Heading = () => {
	const { isAuthenticated, isLoading } = useConvexAuth()

	return (
		<div className='max-w-4xl space-y-4'>
			<h1 className='sm:text-5xl md:text-6xl text-3xl font-bold'>
				Ваши документы и планы. Вместе. Добро пожаловать в{' '}
				<span className='underline'>Jotion</span>
			</h1>

			<h3 className='text-base sm:text-xl md:text-2xl font-medium'>
				Jotion - это рабочее пространство где
				<br />
				работа идет лучше и быстрее.
			</h3>
			{isLoading && (
				<div className='w-full flex items-center justify-center'>
					<Spinner size='lg' />
				</div>
			)}
			{isAuthenticated && !isLoading && (
				<Button asChild>
					<Link href='/documents'>
						Перейти в Jotion
						<ArrowRight className='h-4 w-4 ml-2' />
					</Link>
				</Button>
			)}
			{!isAuthenticated && !isLoading && (
				<>
					<SignInButton mode='modal'>
						<Button>
							Получить Jotion
							<ArrowRight className='h-4 w-4 ml-2' />
						</Button>
					</SignInButton>
				</>
			)}
		</div>
	)
}
