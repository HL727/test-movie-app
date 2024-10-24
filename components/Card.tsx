import Image from 'next/image'

export interface CardInfo {
  title: string
  year: number
  thumbnail: string
}

export default function Card({ title, year, thumbnail }: CardInfo) {
  return (
    <div className='bg-card rounded-lg p-2 flex flex-col'>
      <Image src={thumbnail} width={266} height={400} alt='Thumbnail' />
      <p className='text-lg text-white font-bold'>{title}</p>
      <p className='text-white'>{year}</p>
    </div>
  )
}
