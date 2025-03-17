#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download placeholder images
curl -o public/images/app-preview-1.png "https://placehold.co/800x600/e2e8f0/475569?text=Patient+Confidence"
curl -o public/images/app-preview-2.png "https://placehold.co/800x600/e2e8f0/475569?text=EHR+Integration"
curl -o public/images/app-preview-3.png "https://placehold.co/800x600/e2e8f0/475569?text=AI+Communication"
curl -o public/images/app-preview-4.png "https://placehold.co/800x600/e2e8f0/475569?text=Clinical+Support"
curl -o public/images/app-preview-5.png "https://placehold.co/800x600/e2e8f0/475569?text=Security"
