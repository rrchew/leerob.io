'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Content {
    id: number;
    type: string;
    title: string;
    date: string;
    views: number;
    comments: number;
    imageUrl: string;
}

export default function ContentList() {
    const [contents, setContents] = useState<Content[]>([
        { id: 1, type: '현명 기술', title: '한 달에 9만원 월 수익을 낼 방법 정리', date: '2024.07.17', views: 1, comments: 0, imageUrl: '/path-to-image1.jpg' },
        { id: 2, type: '현명 기술', title: '6월 단 18일간 4천만 원 매출 (수익인증)', date: '2024.06.10', views: 1, comments: 0, imageUrl: '/path-to-image2.jpg' },
        // ... 더 많은 콘텐츠 항목들2
    ]);

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <select className="p-2 border rounded">
                    <option>전체 콘텐츠 40</option>
                </select>
                <div>
                    <button className="mr-2 font-bold">최신순</button>
                    <button className="text-gray-500">과거순</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contents.map((content) => (
                    <div key={content.id} className="border p-4 rounded flex">
                        <div className="mr-4 flex-shrink-0">
                            <Image src={content.imageUrl} alt={content.title} width={100} height={100} className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="mb-2 text-sm text-gray-600">{content.type}</div>
                                <h2 className="text-lg font-bold mb-2">{content.title}</h2>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                                <span>{content.date}</span>
                                <div>
                                    <span className="mr-2">👁 {content.views}</span>
                                    <span>💬 {content.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}