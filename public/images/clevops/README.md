# ClevOps Image Assets

Drop real image files here to replace code-based placeholders.

## Expected files

| Path | Used in | Description |
|------|---------|-------------|
| `hero-dashboard.jpg` | Homepage hero | Growth system dashboard screenshot |
| `service-website-design.jpg` | Services page | Website design mockup |
| `service-lead-system.jpg` | Services page | Lead capture / CRM visual |
| `service-automation.jpg` | Services page | Automation flow visual |
| `service-local-seo.jpg` | Services page | Local SEO / Google Maps visual |
| `service-growth.jpg` | Services page | Analytics / growth chart |
| `work-service-business.jpg` | Homepage work section and `/work` | Verified desktop screenshot of the delivered client build, 2560x1600 (16:10), no browser chrome. Register it in `getCaseAssets()` in `app/components/case-assets.ts`, both pages then swap from the code-drawn structure diagram to `next/image` on their own. |
| `work-service-business-mobile.jpg` | Homepage work section and `/work` | Optional real phone-width capture, around 828x1792. Register it as `mobile` in `getCaseAssets()`; the device frame is only rendered when it exists. |
| `about-workspace.jpg` | About page | Dark workspace / brand visual |
| `location-city.jpg` | Locations page | Generic city/urban background |

## Requirements

- Format: JPG or WebP
- Aspect ratios: 16:9 for hero/service visuals, 4:3 for work before/after
- Minimum width: 1200px for hero, 800px for service blocks
- Style: Dark-toned or overlayable with dark gradients to match ClevOps brand
- Replace code-based placeholder components with `<Image>` from `next/image` once files are added
