import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const baseConfig = {}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(withPayload(baseConfig, { devBundleServerPackages: false }))
