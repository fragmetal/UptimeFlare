import { Container, Group, Text } from '@mantine/core'
import classes from '@/styles/Header.module.css'
import { pageConfig } from '@/uptime.config'

export default function Header() {
  const linkToElement = (link: { label: string; link: string; highlight?: boolean }) => {
  return (
    <Link href={link.link} passHref> {/* Use Link instead of a */}
      <a
        key={link.label}
        className={classes.link}
        data-active={link.highlight}
      >
        {link.label}
      </a>
    </Link>
  )
}

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div>
          <Link href="/"> {/* Use Link instead of a */}
            <Text size="xl" span>
              🕒
            </Text>
            <Text
              size="xl"
              span
              fw={700}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              UptimeFlare
            </Text>
          </Link>
        </div>
  
        <Group gap={5} visibleFrom="sm">
          {pageConfig.links.map(link => (
            <Link key={link.label} href={link.link} passHref> {/* Use Link instead of a */}
              <a className={classes.link} data-active={link.highlight}>
                {link.label}
              </a>
            </Link>
          ))}
        </Group>
  
        <Group gap={5} hiddenFrom="sm">
          {pageConfig.links.filter((link) => (link as any).highlight).map(link => (
            <Link key={link.label} href={link.link} passHref> {/* Use Link instead of a */}
              <a className={classes.link} data-active={link.highlight}>
                {link.label}
              </a>
            </Link>
          ))}
        </Group>
      </Container>
    </header>
  )
}
