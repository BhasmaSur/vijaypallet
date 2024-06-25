import cratetypebox from "@/app/image/cratetypebox"
import european from "@/app/image/european"
import fourwaypallet from "@/app/image/fourwaypallet"
import nailedpine from "@/app/image/nailedpine"
import nailless from "@/app/image/nailless"
import pinewoodpallet from "@/app/image/pinewoodpallet"
import rubberwoordcrate from "@/app/image/rubberwoodcrate"
import skidded from "@/app/image/skidded"
import standard from "@/app/image/standard"
import woodenpackagingcrate from "@/app/image/woodenpackagingcrate"

export const CATEGORY_DETAIL_LABELS = {
    SKIDDED_BASE_BOX : "skiddedBaseBox",
    CRATE_TYPE_BOX : "crateTypeBox",
    NAILED_PINE : "nailedPine",
    NAIL_LESS_PLYWOOD_BOX : "naillessPlywoodBox",
    STANDARD_BOX : "standardBox",
    EUROPEAN_WAY_PALLET : "europeanWayPallet",
    PINE_WOOD_PALLET : "pineWoodPallet",
    FOUR_WAY_CLOSE_BOARD_PALLET :"fourwatCloseBoardPallet",
    RUBBER_WOOD_CRATE : "rubberWoodCrate",
    WOODEN_PACKAGING_CRATE : "woodenPackagingCrate"
}

export const CATEGORY_IMAGE_LOCATION = {
    skiddedBaseBox : skidded,
    crateTypeBox : cratetypebox,
    nailedPine : nailedpine,
    naillessPlywoodBox : nailless,
    standardBox : standard,
    europeanWayPallet : european,
    pineWoodPallet : pinewoodpallet,
    fourwatCloseBoardPallet : fourwaypallet,
    rubberWoodCrate : rubberwoordcrate,
    woodenPackagingCrate : woodenpackagingcrate,
}
export const getCategoryDetail = (category, language) =>{
    return {
        title : language[category],
        itemPara : [
            language[category + "Para1"],
            language[category + "Para2"],
            language[category + "Para3"],
            language[category + "Para4"],
        ],
        features : language[category + "Features"].split(","),
        imageLocation : CATEGORY_IMAGE_LOCATION[category]
    }
}