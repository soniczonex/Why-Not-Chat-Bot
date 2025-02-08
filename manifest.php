<?php
header('Content-Type: application/manifest+json');

// Get config.js content
$configContent = file_get_contents('config.js');

// Extract site name using regex
preg_match('/name:\s*"([^"]+)"/', $configContent, $matches);
$siteName = $matches[1] ?? 'SimpyAI';

$manifest = [
    "name" => $siteName,
    "icons" => [
        [
            "src" => "icons/android-chrome-192x192.png",
            "sizes" => "192x192",
            "type" => "image/png"
        ],
        [
            "src" => "icons/android-chrome-512x512.png",
            "sizes" => "512x512",
            "type" => "image/png"
        ]
    ],
    "theme_color" => "#ffffff",
    "background_color" => "#ffffff",
    "display" => "standalone"
];

echo json_encode($manifest, JSON_PRETTY_PRINT);
