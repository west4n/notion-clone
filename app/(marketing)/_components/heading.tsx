'use client'

import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const Heading = () => {
	return (
		<div className='max-w-3xl space-y-4'>
			<h1 className='sm:text-5xl md:text-6xl text-3xl font-bold'>
				Ваши идеи, документы и планы. Собраны вместе. Добро пожаловать в{' '}
				<span className='underline'>Jotion</span>
			</h1>

			<h3 className='text-base sm:text-xl md:text-2xl font-medium'>
				Jotion - это рабочее пространство где
				<br />
				работа идет лучше и быстрее.
			</h3>

			<Button>
				Зайти в Jotion
				<ArrowRight className='h-4 w-4 ml-2' />
			</Button>
		</div>
	)
}
