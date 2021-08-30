import React from 'react'

import ThemeSwitch from './theme-switch'

import Menu from '@blocks/navigation/menu'
import Newsletter from '@modules/newsletter'
import Icon from '@components/icon'
import { SanityBlock } from '@compiled/schema'

export interface FooterProps {
  data: {
    blocks: SanityBlock[]
    }
  }

const Footer = ({ data = {blocks: []} }: FooterProps) => {
  const { blocks } = data

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer--grid">
        {blocks.map((block, key) => (
          <div key={key} className="footer--block">
            {block.title && <p className="is-h3">{block.title}</p>}

            {block.menu?.items && (
              //@ts-ignore
              <Menu items={block.menu.items} className="menu-footer" />
            )}

            {block.newsletter && <Newsletter data={block.newsletter} />}

            {block.social && (
              <div className="menu-social">
                {block.social.map((link, key) => {
                  return (
                    <a
                      key={key}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name={link.icon} />
                    </a>
                  )
                })}
              </div>
            )}

          {block.paymentMethods && (
            <div className="menu-social">
            {block.paymentMethods.map((link, key: string) => {
              return (
                <a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                <Icon name={link.icon} />
                </a>
              )
            })}
            </div>
          )}

          {/* Put our extras in the last block */}
          {key === 5 && (
            <div className="footer--extras">
            <ThemeSwitch />

            <div className="footer--disclaimer">
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
            </div>
          )}
          </div>
        ))}
    </div>
    </footer>
  )
}

export default Footer
