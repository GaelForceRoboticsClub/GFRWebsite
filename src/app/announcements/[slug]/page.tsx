import {getPostBySlug} from '@/lib/mdx'
import {PageMeta} from "@/lib/definitions";
import Image from 'next/image'

import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'


type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const contentData = await getPageContent(params.slug)

  if (!contentData) {
    return {
      title: 'Page Not Found | GFR Announcements',
      description: 'The page you are looking for does not exist.',
    }
  }

  const {meta} = contentData

  return {
    title: meta.title + ' | ' + "GFR Announcements",
    description: "Written by " + meta.author + " on " + meta.date + ": " + meta.description,
    openGraph: {
      title: meta.title + ' | ' + "GFR Announcements",
      description: "Written by " + meta.author + " on " + meta.date + ": " + meta.description,
      type: 'article',
      authors: [meta.author],
      images: [
        {
          url: "https://www.gaelforcerobotics.com/" + meta.image,
          width: 800,
          height: 400,
        },
      ]
    },
  }
}

const getPageContent = async (slug: any): Promise<{ meta: PageMeta, content: any } | null> => {
  const post = await getPostBySlug(slug)
  if (!post) {
    return null
  }
  return post
}

const Blog = async ({params}: any) => {
  const contentData = await getPageContent(params.slug)

  if (!contentData) {
    notFound()
    return
  }

  const {meta, content} = contentData

  return (
    <div className="mx-0 flex flex-col gap-16 pt-20 text-primary lg:mx-10 lg:pt-12">
      <section className="relative h-full flex flex-col px-5 bg-[var(--primary-background-color)]">
        <section className="">
          <div className="mx-auto flex max-w-screen-md flex-col px-5">
            <h1 className='text-3xl font-bold leading-tight text-pretty sm:text-4xl md:text-6xl'>{meta.title}</h1>
            <p className='mt-5 text-xl text-gray-400'>{meta.description}</p>
            {meta.author && <p className='mt-5 text-sm'>{meta.author + (meta.authorRole ? ', ' + meta.authorRole : '')}</p>}
            {meta.date && <time className='mt-1 text-sm text-gray-400'>{meta.date}</time>}
            <hr className='mt-6'/>
            {meta.image &&
              <>
                <Image src={`/${meta.image}`} alt={meta.title} width={800} height={400} className='mt-3 w-full'/>
                <p className='mt-3 text-sm text-gray-400'>{meta.imageDescription}</p>
                <hr className='mt-3'/>
              </>
            }
            <div className='mt-20 markdown'>
              {content}
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Blog