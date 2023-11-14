import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { createAccessibleTransition } from "../../../packages/styles/src/createAccessibleTransition";
import {
	a11yDisabled,
	a11yFocusStyleRule,
	elementHeight,
	elementPadding,
	elementPaddingRaw,
	utilCss,
	vars,
} from "../../../packages/styles/src/index.css";
import { buttonBaseClsDoNotRemoveOrYouWillBeFired } from "../../../packages/button/src/styles.css";

const size = styleVariants({
	lg: [elementPadding.lg, { height: elementHeight.lg }],
	md: [elementPadding.md, { height: elementHeight.md }],
	sm: [elementPadding.sm, { height: elementHeight.sm }],
});

const hasBorder = styleVariants({
	false: [{ border: "none !important", borderRadius: "0 !important" }],
	true: [],
});

export const inputSlotWrapperDoNotRemoveOrYouWillBeFired = style([]);

const hasSlotLeft = styleVariants({ false: {}, true: {} });
const hasSlotRight = styleVariants({ false: {}, true: {} });

export const getSlotWrapperStyles = recipe({
	base: [
		inputSlotWrapperDoNotRemoveOrYouWillBeFired,
		utilCss({
			display: "flex",
			alignItems: "center",

			background: "background",
			border: "border_default",
			borderRadius: "md",
			color: "text_low_contrast",
			fontWeight: "normal",
			gap: "space_2",
			position: "relative",
			width: "100%",
		}),
		a11yDisabled,
		{
			cursor: "text",
			// gridTemplateColumns: `repeat(auto-fit, minmax(${vars.spacing.space_5}, auto))`,
			...createAccessibleTransition({
				transition: `ease ${vars.transitionDuration.short} ease`,
				transitionProperty: "color, background-color, border-color",
			}),
			selectors: {
				"&:has(input[readonly])": {
					background: vars.color.tint_default,
				},
				"&:hover": {
					borderColor: vars.color.border_hover,
				},
				"&:active": {
					borderColor: vars.color.border_active,
				},
				"&:has(input:focus-visible)": {
					...a11yFocusStyleRule,
				},
				/* eslint-enable sort-keys-fix/sort-keys-fix */
			},
		},
	],
	compoundVariants: [
		// Offset padding left for left slot

		{
			style: [
				{
					paddingLeft: calc.subtract(
						elementPaddingRaw.sm.x,
						vars.spacing.space_1,
					),
				},
			],
			variants: { hasSlotLeft: true, size: "sm" },
		},
		{
			style: [
				{
					paddingLeft: calc.subtract(
						elementPaddingRaw.md.x,
						vars.spacing.space_1,
					),
				},
			],
			variants: { hasSlotLeft: true, size: "md" },
		},
		{
			style: [
				{
					paddingLeft: calc.subtract(
						elementPaddingRaw.lg.x,
						vars.spacing.space_1,
					),
				},
			],
			variants: { hasSlotLeft: true, size: "lg" },
		},

		// Offset padding right for right slot

		{
			style: [
				{
					paddingRight: calc.subtract(
						elementPaddingRaw.sm.x,
						vars.spacing.space_1,
					),
				},
			],
			variants: { hasSlotRight: true, size: "sm" },
		},
		{
			style: [
				{
					paddingRight: calc.subtract(
						elementPaddingRaw.md.x,
						vars.spacing.space_1,
					),
				},
			],
			variants: { hasSlotRight: true, size: "md" },
		},
		{
			style: [
				{
					paddingRight: calc.subtract(
						elementPaddingRaw.lg.x,
						vars.spacing.space_1,
					),
				},
			],
			variants: { hasSlotRight: true, size: "lg" },
		},
	],
	defaultVariants: {
		hasBorder: true,
		hasSlotLeft: false,
		hasSlotRight: false,
		size: "md",
	},
	variants: {
		hasBorder,
		hasSlotLeft,
		hasSlotRight,
		size,
	},
});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired} > *:not(input):not(:empty)`,
	{
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
		minHeight: vars.spacing.space_4,
		minWidth: vars.spacing.space_4,
	},
);

export const clearButtonStyle = style({});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}:has(input:placeholder-shown) > ${clearButtonStyle}`,
	{
		display: "none",
	},
);

export const inputStyles = style([
	utilCss({
		flexGrow: "1",
		fontStyle: "bodyMd",
		height: "space_6",
		margin: "none",
		padding: "none",
		width: "100%",
	}),
	a11yDisabled,
	{
		background: "transparent",
		border: "none",
		selectors: {
			"&:focus": {
				outline: "none",
			},
			"&:focus-visible": {
				outline: "none",
			},
		},
	},
]);

const tabSide = styleVariants({
	left: {
		borderBottomLeftRadius: vars.borderRadius.md,
		borderTopLeftRadius: vars.borderRadius.md,
	},
	right: {
		borderBottomRightRadius: vars.borderRadius.md,
		borderTopRightRadius: vars.borderRadius.md,
	},
});

const addonHasBorder = styleVariants({
	false: {},
	true: {},
});

globalStyle(
	`${tabSide.left} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired},\
     ${tabSide.left} ${buttonBaseClsDoNotRemoveOrYouWillBeFired}`,
	{
		borderBottomRightRadius: "0",
		borderRight: "none",
		borderTopRightRadius: "0",
	},
);

globalStyle(
	`${tabSide.right} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired},\
     ${tabSide.right} ${buttonBaseClsDoNotRemoveOrYouWillBeFired}`,
	{
		borderBottomLeftRadius: "0",
		borderLeft: "none",
		borderTopLeftRadius: "0",
	},
);

const tabSize = styleVariants({
	lg: [{ height: elementHeight.lg }],
	md: [{ height: elementHeight.md }],
	sm: [{ height: elementHeight.sm }],
});

export const getInputAddonTabStyle = recipe({
	base: [
		utilCss({
			display: "flex",
			alignItems: "center",

			background: "tint_default",
			color: "text_low_contrast",

			fontStyle: "bodyMd",
			fontWeight: "medium",
		}),
		{
			selectors: {
				"&:has(:focus-visible)": {
					...a11yFocusStyleRule,
				},
			},
		},
	],
	compoundVariants: [
		{
			style: [
				{
					borderBottom: `1px solid ${vars.color.border_default}`,
					borderBottomLeftRadius: vars.borderRadius.md,
					borderLeft: `1px solid ${vars.color.border_default}`,
					borderTop: `1px solid ${vars.color.border_default}`,
					borderTopLeftRadius: vars.borderRadius.md,
				},
			],
			variants: { hasBorder: true, side: "left" },
		},
		{
			style: [
				{
					borderBottom: `1px solid ${vars.color.border_default}`,
					borderBottomRightRadius: vars.borderRadius.md,
					borderRight: `1px solid ${vars.color.border_default}`,
					borderTop: `1px solid ${vars.color.border_default}`,
					borderTopRightRadius: vars.borderRadius.md,
				},
			],
			variants: { hasBorder: true, side: "right" },
		},
	],
	defaultVariants: {
		side: "left",
		size: "md",
	},
	variants: {
		hasBorder: addonHasBorder,
		padding: elementPadding,
		side: tabSide,
		size: tabSize,
	},
});

const hasAddonLeft = styleVariants({
	false: {},
	true: {},
});

const hasAddonRight = styleVariants({
	false: {},
	true: {},
});

/**
 * @migrated
 */
export const getAddonWrapperStyle = recipe({
	base: [
		utilCss({
			alignItems: "center",
			display: "flex",
			width: "100%",
		}),
	],
	variants: {
		hasAddonLeft,
		hasAddonRight,
	},
});

/**
 * @migrated
 */
export const addonChildrenStyle = style({
	flexGrow: 1,
	flexShrink: 0,
	// width: "100%",
});

globalStyle(
	`${hasAddonLeft.true} > ${addonChildrenStyle} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired}`,
	{
		borderBottomLeftRadius: "0 !important",
		borderTopLeftRadius: "0 !important",
	},
);

globalStyle(
	`${hasAddonRight.true} > ${addonChildrenStyle} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired}`,
	{
		borderBottomRightRadius: "0 !important",
		borderTopRightRadius: "0 !important",
	},
);