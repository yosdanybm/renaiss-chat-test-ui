import { Highlight, themes } from 'prism-react-renderer'

export type Language = 'jsx' | 'tsx' | 'swift' | 'kotlin' | 'objectivec' | 'js-extras' | 'reason' | 'rust' | 'graphql' | 'yaml' | 'go' | 'cpp' | 'markdown' | string

const CodeBlock = ({ code, language }: { code: string; language: Language }) => {
    return (
        <Highlight code={code} language={language} theme={themes.nightOwl}>
            {({ style, tokens, getLineProps, getTokenProps }) => (
                <pre className="font-code" style={{ padding: '4px', borderRadius: '8px', ...style }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            <span style={{ marginRight: '10px' }}>{i + 1}</span>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}

export { CodeBlock }
