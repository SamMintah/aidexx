'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  ImageIcon,
  Music,
  SquareCodeIcon,
  Video,
  MessageCircleCode,
  Code
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
  {
    label: 'Image Generation',
    description:
      'Effortlessly create and customize images for your projects.Aidexx provides quick and intuitive tools for generating images tailored to your needs.',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-500',
    bgColor: 'text-sky-500/10'
  },
  {
    label: 'Music Generation',
    icon: Music,
    description:
      'Compose unique and personalized music with ease. Aidexx offers powerful tools for generating musical compositions, making your projects sound as great as they look.',
    href: '/music',
    color: 'text-sky-500',
    bgColor: 'text-sky-500/10'
  },
  {
    label: 'Code Generation',
    icon: Code,
    description:
      'Transform Your idea into code snippets seamlessly. Aidexx converts Text intructions into code',
    href: '/code',
    color: 'text-green-500',
    bgColor: 'text-sky-500/5'
  },
  {
    label: 'Video Generation',
    description:
      'Craft engaging videos effortlessly. Aidexx simplifies the video creation process, allowing you to generate captivating content for your projects in no time.',
    icon: Video,
    href: '/video',
    color: 'text-pink-500',
    bgColor: 'text-sky-500/10'
  },
  {
    label: 'Screenshot 2 Code',
    description:
      'Transform screenshots into code snippets seamlessly. Aidexx converts images into code, streamlining the process of integrating visuals into your project.',
    icon: SquareCodeIcon,
    href: '/code',
    color: 'text-orange-500',
    bgColor: 'text-sky-500/5'
  },
  {
    label: 'Chat',
    description:
      'Enhance communication with integrated chat features. Aidexx facilitates seamless interaction and collaboration within your projects.',
    icon: MessageCircleCode,
    href: '/chat',
    color: 'text-green-500',
    bgColor: 'text-sky-500/5'
  }
];

export default function DashboardPage() {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4 md:m-5">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Welcome to Aidexx AI
        </h2>
        <p className="md:px-20 text-muted-foreground font-light text-sm m-3 md:text-sm md:ml-5 mr-5 text-center">
          Explore and leverage a suite of intelligent tools designed to simplify
          your workflow. From code generation to image and music creation,
          Aidexx is your all-in-one solution for seamless innovation.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-36 space-y-4 grid md:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <Card
            onClick={()=>router.push(tool.href)}
            key={tool.href}
            className="p-4 border-black/5 flex flex-col items-center bg-slate-10 justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-center gap-x-4">
                <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                  <tool.icon className={cn('w-8 h-8', tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <div className="p-5 text-base md:text-sm text-muted-foreground text-center">
                {tool.description}
              </div>
              <div className="flex justify-center items-center">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="md:px-20 md:m-10 h-20">
      </div>
    </div>
  );
}
