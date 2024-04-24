'use client';

import { FC, useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import ChatHeader from './ChatHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { MessageCircleQuestion, X } from 'lucide-react';

const Chat: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div
          className={
            isOpen
              ? 'fixed right-8 w-80 bottom-8 bg-white border border-gray-200 overflow-hidden'
              : 'fixed right-2 bottom-2 overflow-hidden'
          }
        >
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger
              onClick={handleOpen}
              className={`px-6 ${isOpen && 'border-b'} border-zinc-300`}
            >
              {isOpen && <ChatHeader />}
              {isOpen ? (
                <X className="chat-icon" />
              ) : (
                <span
                  className="bg-gradient-to-r
                from-blue-400
                to-green-300 p-3 rounded-full animate-bounce"
                >
                  <MessageCircleQuestion fill="white" className="chat-icon " />
                </span>
              )}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                <ChatMessages className="px-2 py-3 flex-1" />
                <ChatInput className="px-4" />
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
