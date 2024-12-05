import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '80%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    const reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
}

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
const names = data.flat().map(person => person.name);
console.log(names); // Output: ['John', 'Jane', 'Bob']
const extractedNames = data.reduce((acc, curr) => {
    curr.forEach(person => acc.push(person.name));
    return acc;
}, []);
console.log(extractedNames); // Output: ['John', 'Jane', 'Bob']

