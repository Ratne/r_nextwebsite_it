import {useEffect, useState} from 'react';

const useH2elements = ({text}: { text: string }) => {
    const [h2Content, setH2Content] = useState(undefined);

    useEffect(() => {
        function getH2ContentsFromHTML(htmlString) {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = htmlString;
            const h2Elements = tempElement.querySelectorAll('h2');
            const h2Contents = Array.from(h2Elements).map((h2: HTMLElement) => h2?.innerHTML);
            return h2Contents;
        }

        const h2Contents = getH2ContentsFromHTML(text).map((ele: string) => (
            {
                id: `${ele.toLowerCase().split(" ").join("")}`,
                label: ele,
            }
        ));
        setH2Content(h2Contents)
    }, []);

    return {h2Content};
};

export default useH2elements;