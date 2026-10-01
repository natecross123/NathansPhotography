module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/weddings/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WeddingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/photo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navigation.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/photos.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const stories = {
    "amanda-and-josh": {
        name: "Amanda & Josh",
        place: "Kingston, Jamaica",
        year: "2026",
        hero: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].wedding1,
        chapters: [
            {
                title: "Getting ready",
                layout: "pair",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].woman,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].ring
                ]
            },
            {
                layout: "full",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].hero
                ]
            },
            {
                title: "The ceremony",
                layout: "full",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].dance
                ]
            },
            {
                title: "Portraits",
                layout: "portrait",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].wedding1,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].palms
                ]
            },
            {
                title: "The reception",
                layout: "trio",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].dinner,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].wedding2,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].sea
                ]
            }
        ]
    },
    "sarah-and-daniel": {
        name: "Sarah & Daniel",
        place: "Montego Bay, Jamaica",
        year: "2025",
        hero: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].wedding2,
        chapters: [
            {
                title: "On the morning",
                layout: "pair",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].woman,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].dinner
                ]
            },
            {
                layout: "full",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].palms
                ]
            },
            {
                title: "By the sea",
                layout: "portrait",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].ring,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].sea
                ]
            },
            {
                title: "The celebration",
                layout: "trio",
                photos: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].dance,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].wedding1,
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$photos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["images"].hero
                ]
            }
        ]
    }
};
async function WeddingPage({ params }) {
    const { slug } = await params;
    const story = stories[slug];
    if (!story) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "pt-28",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "mx-auto max-w-[1600px] px-5 pb-12 md:px-8 md:pb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow mb-5 text-[#79756d]",
                        children: "Wedding story"
                    }, void 0, false, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 11,
                        columnNumber: 282
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-between gap-5 md:flex-row md:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "serif text-5xl tracking-[-.045em] md:text-8xl",
                                children: story.name
                            }, void 0, false, {
                                fileName: "[project]/app/weddings/[slug]/page.tsx",
                                lineNumber: 11,
                                columnNumber: 420
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow leading-relaxed text-[#79756d]",
                                children: [
                                    story.place,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                                        lineNumber: 11,
                                        columnNumber: 566
                                    }, this),
                                    story.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/weddings/[slug]/page.tsx",
                                lineNumber: 11,
                                columnNumber: 499
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 11,
                        columnNumber: 342
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 11,
                columnNumber: 211
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                photo: story.hero,
                priority: true,
                className: "h-[90vw] max-h-[950px] w-full"
            }, void 0, false, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 11,
                columnNumber: 603
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-[1600px] space-y-20 px-5 py-20 md:space-y-32 md:px-8 md:py-32",
                children: [
                    story.chapters.map((chapter, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryLayout, {
                            ...chapter
                        }, i, false, {
                            fileName: "[project]/app/weddings/[slug]/page.tsx",
                            lineNumber: 11,
                            columnNumber: 811
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-[#c9c5bc] pt-12 text-center md:pt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "serif text-4xl md:text-6xl",
                                children: story.name
                            }, void 0, false, {
                                fileName: "[project]/app/weddings/[slug]/page.tsx",
                                lineNumber: 11,
                                columnNumber: 919
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "eyebrow mt-4 text-[#79756d]",
                                children: [
                                    story.place,
                                    " / ",
                                    story.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/weddings/[slug]/page.tsx",
                                lineNumber: 11,
                                columnNumber: 979
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navigation$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InquiryLink"], {
                                className: "eyebrow mt-12 inline-block border-b border-[#12110f] pb-2"
                            }, void 0, false, {
                                fileName: "[project]/app/weddings/[slug]/page.tsx",
                                lineNumber: 11,
                                columnNumber: 1054
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 11,
                        columnNumber: 849
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 11,
                columnNumber: 682
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/weddings/[slug]/page.tsx",
        lineNumber: 11,
        columnNumber: 187
    }, this);
}
function StoryLayout({ title, layout, photos }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "eyebrow mb-7 text-[#79756d]",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 12,
                columnNumber: 104
            }, this),
            layout === "full" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                photo: photos[0],
                className: "h-[70vw] min-h-72 max-h-[850px]"
            }, void 0, false, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 12,
                columnNumber: 183
            }, this),
            layout === "pair" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-2 md:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                        photo: photos[0],
                        className: "h-[115vw] max-h-[780px] md:h-[55vw]"
                    }, void 0, false, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 12,
                        columnNumber: 330
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                        photo: photos[1],
                        className: "h-[75vw] min-h-72 md:mt-28 md:h-[40vw]"
                    }, void 0, false, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 12,
                        columnNumber: 405
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 12,
                columnNumber: 277
            }, this),
            layout === "portrait" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-[.7fr_1.3fr] md:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                        photo: photos[0],
                        className: "h-[125vw] max-h-[850px] md:h-[62vw]"
                    }, void 0, false, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 12,
                        columnNumber: 580
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                        photo: photos[1],
                        className: "h-[65vw] min-h-72 md:mt-44 md:h-[38vw]"
                    }, void 0, false, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 12,
                        columnNumber: 655
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 12,
                columnNumber: 516
            }, this),
            layout === "trio" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6",
                children: photos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$photo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Photo"], {
                        photo: p,
                        className: `h-[70vw] min-h-52 md:h-[35vw] ${i === 0 ? "col-span-2 md:col-span-1" : ""}`
                    }, i, false, {
                        fileName: "[project]/app/weddings/[slug]/page.tsx",
                        lineNumber: 12,
                        columnNumber: 848
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/weddings/[slug]/page.tsx",
                lineNumber: 12,
                columnNumber: 762
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/weddings/[slug]/page.tsx",
        lineNumber: 12,
        columnNumber: 85
    }, this);
}
}),
"[project]/app/weddings/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/weddings/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/photo.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Photo",
    ()=>Photo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function Photo({ photo, className = "", priority = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `image-wrap relative ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            src: photo.src,
            alt: photo.alt,
            fill: true,
            priority: priority,
            sizes: "(max-width: 768px) 100vw, 80vw",
            className: "object-cover",
            style: {
                objectPosition: photo.position ?? "center"
            }
        }, void 0, false, {
            fileName: "[project]/components/photo.tsx",
            lineNumber: 5,
            columnNumber: 61
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/photo.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/data/photos.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "images",
    ()=>images
]);
const base = "";
const images = {
    hero: {
        src: base,
        alt: "Bride and groom walking through a sunlit field"
    },
    sea: {
        src: base,
        alt: "Blue Caribbean water viewed from above"
    },
    woman: {
        src: base,
        alt: "Portrait in soft afternoon light"
    },
    dance: {
        src: base,
        alt: "Couple dancing at their reception"
    },
    palms: {
        src: base,
        alt: "Lush tropical landscape"
    },
    wedding1: {
        src: base,
        alt: "Bride and groom sharing a quiet moment"
    },
    wedding2: {
        src: base,
        alt: "Wedding table details in candlelight"
    },
    ring: {
        src: base,
        alt: "Couple embracing outdoors"
    },
    portrait: {
        src: base,
        alt: "Portrait of Nathan Crossdale"
    },
    dinner: {
        src: base,
        alt: "Intimate dinner setting"
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1230bpg._.js.map