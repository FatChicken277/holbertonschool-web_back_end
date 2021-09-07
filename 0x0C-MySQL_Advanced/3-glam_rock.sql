-- lists all bands with Glam rock as their main style, ranked by their longevity
SELECT  band_name,
        ifnull(split,2020) - formed AS lifespan
FROM metal_bands
WHERE style like '%Glam rock%'
ORDER BY lifespan desc;