import ContentList from 'app/components/ContentList';


export default function Page() {
    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">ddddd</h1>
                <div className="flex items-center">
                    <input type="search" placeholder="검색" className="mr-4 p-2 border rounded" />
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
            </header>

            <main>
                <ContentList />
            </main>
        </div>
    );
}
